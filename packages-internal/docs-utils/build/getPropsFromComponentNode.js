"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropsFromComponentNode = getPropsFromComponentNode;
const ts = __importStar(require("typescript"));
function isTypeJSXElementLike(type, project) {
    const symbol = type.symbol ?? type.aliasSymbol;
    if (symbol) {
        const name = project.checker.getFullyQualifiedName(symbol);
        return (
        // Remove once global JSX namespace is no longer used by React
        name === 'global.JSX.Element' ||
            name === 'React.JSX.Element' ||
            name === 'React.ReactElement' ||
            name === 'React.ReactNode');
    }
    if (type.isUnion()) {
        return type.types.every(
        // eslint-disable-next-line no-bitwise
        (subType) => subType.flags & ts.TypeFlags.Null || isTypeJSXElementLike(subType, project));
    }
    return false;
}
function isStyledFunction(node) {
    return (!!node.initializer &&
        ts.isCallExpression(node.initializer) &&
        ts.isCallExpression(node.initializer.expression) &&
        ts.isIdentifier(node.initializer.expression.expression) &&
        node.initializer.expression.expression.escapedText === 'styled');
}
function getJSXLikeReturnValueFromFunction(type, project) {
    return type
        .getCallSignatures()
        .filter((signature) => isTypeJSXElementLike(signature.getReturnType(), project));
}
function parsePropsType({ name, type, shouldInclude = () => true, location, sourceFile, }) {
    const parsedProps = {};
    type
        .getProperties()
        .filter((property) => shouldInclude({ name: property.getName(), depth: 1 }))
        .forEach((property) => {
        parsedProps[property.getName()] = {
            signatures: [
                {
                    symbol: property,
                    componentType: type,
                },
            ],
            onlyUsedInSomeSignatures: false,
        };
    });
    return {
        name,
        location,
        type,
        sourceFile,
        props: parsedProps,
    };
}
function parseFunctionComponent({ node, shouldInclude, project, }) {
    if (!node.name) {
        return null;
    }
    const symbol = project.checker.getSymbolAtLocation(node.name);
    if (!symbol) {
        return null;
    }
    const componentName = node.name.getText();
    // Discriminate render functions to components
    if (componentName[0].toUpperCase() !== componentName[0]) {
        return null;
    }
    const signatures = getJSXLikeReturnValueFromFunction(project.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration), project);
    if (signatures.length === 0) {
        return null;
    }
    const parsedComponents = signatures.map((signature) => parsePropsType({
        shouldInclude,
        name: componentName,
        type: project.checker.getTypeOfSymbolAtLocation(signature.parameters[0], signature.parameters[0].valueDeclaration),
        location: signature.parameters[0].valueDeclaration,
        sourceFile: node.getSourceFile(),
    }));
    const squashedProps = {};
    parsedComponents.forEach((parsedComponent) => {
        Object.keys(parsedComponent.props).forEach((propName) => {
            if (!squashedProps[propName]) {
                squashedProps[propName] = parsedComponent.props[propName];
            }
            else {
                squashedProps[propName].signatures = [
                    ...squashedProps[propName].signatures,
                    ...parsedComponent.props[propName].signatures,
                ];
            }
        });
    });
    const squashedParsedComponent = {
        ...parsedComponents[0],
        props: squashedProps,
    };
    Object.keys(squashedParsedComponent.props).forEach((propName) => {
        squashedParsedComponent.props[propName].onlyUsedInSomeSignatures =
            squashedParsedComponent.props[propName].signatures.length < signatures.length;
    });
    return squashedParsedComponent;
}
function getPropsFromVariableDeclaration({ node, project, checkDeclarations, shouldInclude, }) {
    const type = project.checker.getTypeAtLocation(node.name);
    if (!node.initializer) {
        if (checkDeclarations &&
            type.aliasSymbol &&
            type.aliasTypeArguments &&
            project.checker.getFullyQualifiedName(type.aliasSymbol) === 'React.JSXElementConstructor') {
            const propsType = type.aliasTypeArguments[0];
            if (propsType === undefined) {
                throw new TypeError('Unable to find symbol for `props`. This is a bug in typescript-to-proptypes.');
            }
            return parsePropsType({
                name: node.name.getText(),
                type: propsType,
                location: node.name,
                shouldInclude,
                sourceFile: node.getSourceFile(),
            });
        }
        if (checkDeclarations) {
            return parseFunctionComponent({
                node,
                shouldInclude,
                project,
            });
        }
        return null;
    }
    if ((ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer)) &&
        node.initializer.parameters.length === 1) {
        return parseFunctionComponent({
            node,
            shouldInclude,
            project,
        });
    }
    //  x = React.memo((props:type) { return <div/> })
    //  x = React.forwardRef((props:type) { return <div/> })
    if (ts.isCallExpression(node.initializer) && node.initializer.arguments.length > 0) {
        const potentialComponent = node.initializer.arguments[0];
        if ((ts.isArrowFunction(potentialComponent) || ts.isFunctionExpression(potentialComponent)) &&
            potentialComponent.parameters.length > 0 &&
            getJSXLikeReturnValueFromFunction(project.checker.getTypeAtLocation(potentialComponent), project).length > 0) {
            const propsSymbol = project.checker.getSymbolAtLocation(potentialComponent.parameters[0].name);
            if (propsSymbol) {
                return parsePropsType({
                    name: node.name.getText(),
                    type: project.checker.getTypeOfSymbolAtLocation(propsSymbol, propsSymbol.valueDeclaration),
                    location: propsSymbol.valueDeclaration,
                    shouldInclude,
                    sourceFile: node.getSourceFile(),
                });
            }
        }
    }
    // handle component factories: x = createComponent()
    if (checkDeclarations &&
        node.initializer &&
        !isStyledFunction(node) &&
        getJSXLikeReturnValueFromFunction(type, project).length > 0) {
        return parseFunctionComponent({
            node,
            shouldInclude,
            project,
        });
    }
    return null;
}
function getPropsFromComponentNode({ node, shouldInclude, project, checkDeclarations, }) {
    let parsedComponent = null;
    // function x(props: type) { return <div/> }
    if (ts.isFunctionDeclaration(node) &&
        node.name &&
        node.parameters.length === 1 &&
        getJSXLikeReturnValueFromFunction(project.checker.getTypeAtLocation(node.name), project)
            .length > 0) {
        parsedComponent = parseFunctionComponent({ node, shouldInclude, project });
    }
    else if (ts.isVariableDeclaration(node)) {
        parsedComponent = getPropsFromVariableDeclaration({
            node,
            project,
            checkDeclarations,
            shouldInclude,
        });
    }
    else if (ts.isVariableStatement(node)) {
        // const x = ...
        ts.forEachChild(node.declarationList, (variableNode) => {
            if (parsedComponent != null) {
                return;
            }
            // x = (props: type) => { return <div/> }
            // x = function(props: type) { return <div/> }
            // x = function y(props: type) { return <div/> }
            // x = react.memo((props:type) { return <div/> })
            if (ts.isVariableDeclaration(variableNode) && variableNode.name) {
                parsedComponent = getPropsFromVariableDeclaration({
                    node: variableNode,
                    project,
                    checkDeclarations,
                    shouldInclude,
                });
            }
            if (ts.isClassDeclaration(variableNode) &&
                variableNode.name &&
                variableNode.heritageClauses &&
                variableNode.heritageClauses.length === 1) {
                const heritage = variableNode.heritageClauses[0];
                if (heritage.types.length !== 1) {
                    return;
                }
                const arg = heritage.types[0];
                if (!arg.typeArguments) {
                    return;
                }
                parsedComponent = parsePropsType({
                    shouldInclude,
                    name: variableNode.name.getText(),
                    location: arg.typeArguments[0],
                    type: project.checker.getTypeAtLocation(arg.typeArguments[0]),
                    sourceFile: node.getSourceFile(),
                });
            }
        });
    }
    return parsedComponent;
}
