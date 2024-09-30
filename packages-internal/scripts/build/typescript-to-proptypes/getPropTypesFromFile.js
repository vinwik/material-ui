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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropTypesFromFile = getPropTypesFromFile;
const typescript_1 = __importDefault(require("typescript"));
const doctrine = __importStar(require("doctrine"));
const internal_docs_utils_1 = require("@mui/internal-docs-utils");
const createType_1 = require("./createType");
function getSymbolFileNames(symbol) {
    const declarations = symbol.getDeclarations() || [];
    return new Set(declarations.map((declaration) => declaration.getSourceFile().fileName));
}
function getSymbolDocumentation({ symbol, project, }) {
    if (symbol === undefined) {
        return undefined;
    }
    const decl = symbol.getDeclarations();
    if (decl) {
        // @ts-ignore
        const comments = typescript_1.default.getJSDocCommentsAndTags(decl[0]);
        if (comments && comments.length === 1) {
            const commentNode = comments[0];
            if (typescript_1.default.isJSDoc(commentNode)) {
                return doctrine.unwrapComment(commentNode.getText()).trim();
            }
        }
    }
    const comment = typescript_1.default.displayPartsToString(symbol.getDocumentationComment(project.checker));
    return comment !== '' ? comment : undefined;
}
function getType({ project, symbol, declaration, location, }) {
    const symbolType = declaration
        ? // The proptypes aren't detailed enough that we need all the different combinations
            // so we just pick the first and ignore the rest
            project.checker.getTypeOfSymbolAtLocation(symbol, declaration)
        : project.checker.getTypeOfSymbolAtLocation(symbol, location);
    let type;
    if (declaration === undefined) {
        type = symbolType;
    }
    else {
        const declaredType = project.checker.getTypeAtLocation(declaration);
        const baseConstraintOfType = project.checker.getBaseConstraintOfType(declaredType);
        if (baseConstraintOfType === undefined || baseConstraintOfType === declaredType) {
            type = symbolType;
        }
        // get `React.ElementType` from `C extends React.ElementType`
        else if (baseConstraintOfType.aliasSymbol?.escapedName === 'ElementType') {
            type = baseConstraintOfType;
        }
        else {
            type = symbolType;
        }
    }
    if (!type) {
        throw new Error('No types found');
    }
    return type;
}
function checkType({ type, location, typeStack, name, project, }) {
    // If the typeStack contains type.id we're dealing with an object that references itself.
    // To prevent getting stuck in an infinite loop we just set it to an createObjectType
    if (typeStack.includes(type.id)) {
        return (0, createType_1.createObjectType)({ jsDoc: undefined });
    }
    const typeNode = type;
    const symbol = typeNode.aliasSymbol ? typeNode.aliasSymbol : typeNode.symbol;
    const jsDoc = getSymbolDocumentation({ symbol, project });
    {
        const typeName = symbol ? project.checker.getFullyQualifiedName(symbol) : null;
        switch (typeName) {
            // Remove once global JSX namespace is no longer used by React
            case 'global.JSX.Element':
            case 'React.JSX.Element':
            case 'React.ReactElement': {
                return (0, createType_1.createElementType)({ jsDoc, elementType: 'element' });
            }
            case 'React.ElementType': {
                return (0, createType_1.createElementType)({
                    jsDoc,
                    elementType: 'elementType',
                });
            }
            case 'React.ReactNode': {
                return (0, createType_1.createUnionType)({
                    jsDoc,
                    types: [
                        (0, createType_1.createElementType)({ elementType: 'node', jsDoc: undefined }),
                        (0, createType_1.createUndefinedType)({ jsDoc: undefined }),
                    ],
                });
            }
            case 'React.Component': {
                return (0, createType_1.createInstanceOfType)({ jsDoc, instance: typeName });
            }
            case 'Element':
            case 'HTMLElement': {
                return (0, createType_1.createDOMElementType)({ jsDoc, optional: undefined });
            }
            case 'RegExp': {
                return (0, createType_1.createInstanceOfType)({ jsDoc, instance: 'RegExp' });
            }
            case 'URL': {
                return (0, createType_1.createInstanceOfType)({ jsDoc, instance: 'URL' });
            }
            case 'URLSearchParams': {
                return (0, createType_1.createInstanceOfType)({ jsDoc, instance: 'URLSearchParams' });
            }
            case 'Date': {
                if (!project.shouldUseObjectForDate?.({ name })) {
                    return (0, createType_1.createInstanceOfType)({ jsDoc, instance: 'Date' });
                }
                return (0, createType_1.createObjectType)({ jsDoc });
            }
            default:
                // continue with function execution
                break;
        }
    }
    if (project.checker.isArrayType(type)) {
        // @ts-ignore
        const arrayType = project.checker.getElementTypeOfArrayType(type);
        return (0, createType_1.createArrayType)({
            arrayType: checkType({ type: arrayType, location, typeStack, name, project }),
            jsDoc,
        });
    }
    const isTupleType = project.checker.isTupleType(type);
    if (isTupleType) {
        return (0, createType_1.createArrayType)({
            arrayType: (0, createType_1.createUnionType)({
                jsDoc: undefined,
                types: type.typeArguments.map((x) => checkType({ type: x, location, typeStack, name, project })),
            }),
            jsDoc,
        });
    }
    if (type.isUnion()) {
        const node = (0, createType_1.createUnionType)({
            jsDoc,
            types: type.types.map((x) => checkType({ type: x, location, typeStack, name, project })),
        });
        return node.types.length === 1 ? node.types[0] : node;
    }
    if (type.flags & typescript_1.default.TypeFlags.TypeParameter) {
        const baseConstraintOfType = project.checker.getBaseConstraintOfType(type);
        if (baseConstraintOfType) {
            if (baseConstraintOfType.flags & typescript_1.default.TypeFlags.Object &&
                baseConstraintOfType.symbol.members?.size === 0) {
                return (0, createType_1.createAnyType)({ jsDoc });
            }
            return checkType({ type: baseConstraintOfType, location, typeStack, name, project });
        }
    }
    if (type.flags & typescript_1.default.TypeFlags.String) {
        return (0, createType_1.createStringType)({ jsDoc });
    }
    if (type.flags & typescript_1.default.TypeFlags.Number) {
        return (0, createType_1.createNumericType)({ jsDoc });
    }
    if (type.flags & typescript_1.default.TypeFlags.Undefined) {
        return (0, createType_1.createUndefinedType)({ jsDoc });
    }
    if (type.flags & typescript_1.default.TypeFlags.Any || type.flags & typescript_1.default.TypeFlags.Unknown) {
        return (0, createType_1.createAnyType)({ jsDoc });
    }
    if (type.flags & typescript_1.default.TypeFlags.Literal) {
        if (type.isLiteral()) {
            return (0, createType_1.createLiteralType)({
                value: type.isStringLiteral() ? `"${type.value}"` : type.value,
                jsDoc,
            });
        }
        return (0, createType_1.createLiteralType)({
            jsDoc,
            value: project.checker.typeToString(type),
        });
    }
    if (type.flags & typescript_1.default.TypeFlags.Null) {
        return (0, createType_1.createLiteralType)({ jsDoc, value: 'null' });
    }
    if (type.flags & typescript_1.default.TypeFlags.IndexedAccess) {
        const objectType = type.objectType;
        if (objectType.flags & typescript_1.default.TypeFlags.Conditional) {
            const node = (0, createType_1.createUnionType)({
                jsDoc,
                types: [
                    objectType.resolvedTrueType,
                    objectType.resolvedFalseType,
                ]
                    .map((resolveType) => resolveType?.getProperty(name))
                    .filter((propertySymbol) => !!propertySymbol)
                    .map((propertySymbol) => checkType({
                    type: getType({
                        project,
                        symbol: propertySymbol,
                        declaration: propertySymbol.declarations?.[0],
                        location,
                    }),
                    location,
                    typeStack,
                    name,
                    project,
                })),
            });
            return node.types.length === 1 ? node.types[0] : node;
        }
    }
    if (type.getCallSignatures().length) {
        return (0, createType_1.createFunctionType)({ jsDoc });
    }
    // () => new ClassInstance
    if (type.getConstructSignatures().length) {
        return (0, createType_1.createFunctionType)({ jsDoc });
    }
    // Object-like type
    {
        const properties = type.getProperties();
        if (properties.length) {
            if (project.shouldResolveObject({
                name,
                propertyCount: properties.length,
                depth: typeStack.length,
            })) {
                const filtered = properties.filter((x) => project.shouldInclude({ name: x.getName(), depth: typeStack.length + 1 }));
                if (filtered.length > 0) {
                    return (0, createType_1.createInterfaceType)({
                        jsDoc,
                        types: filtered.map((x) => {
                            const definition = checkSymbol({
                                symbol: x,
                                location,
                                project,
                                typeStack: [...typeStack, type.id],
                            });
                            definition.propType.jsDoc = definition.jsDoc;
                            return [definition.name, definition.propType];
                        }),
                    });
                }
            }
            return (0, createType_1.createObjectType)({ jsDoc });
        }
    }
    // Object without properties or object keyword
    if (type.flags & typescript_1.default.TypeFlags.Object ||
        (type.flags & typescript_1.default.TypeFlags.NonPrimitive && project.checker.typeToString(type) === 'object')) {
        return (0, createType_1.createObjectType)({ jsDoc });
    }
    console.warn(`${project.reactComponentName}: Unable to handle node of type "ts.TypeFlags.${typescript_1.default.TypeFlags[type.flags]}", using any`);
    return (0, createType_1.createAnyType)({ jsDoc });
}
function checkSymbol({ project, symbol, location, typeStack, }) {
    const declarations = symbol.getDeclarations();
    const declaration = declarations && declarations[0];
    const symbolFilenames = getSymbolFileNames(symbol);
    const jsDoc = getSymbolDocumentation({ symbol, project });
    // TypeChecker keeps the name for
    // { a: React.ElementType, b: React.ReactElement | boolean }
    // but not
    // { a?: React.ElementType, b: React.ReactElement }
    // get around this by not using the TypeChecker
    if (declaration &&
        typescript_1.default.isPropertySignature(declaration) &&
        declaration.type &&
        typescript_1.default.isTypeReferenceNode(declaration.type)) {
        const name = declaration.type.typeName.getText();
        if (name === 'React.ElementType' ||
            name === 'React.JSXElementConstructor' ||
            name === 'React.ReactElement') {
            const elementNode = (0, createType_1.createElementType)({
                elementType: name === 'React.ReactElement' ? 'element' : 'elementType',
                jsDoc,
            });
            return {
                $$id: project.createPropTypeId(symbol),
                name: symbol.getName(),
                jsDoc,
                filenames: symbolFilenames,
                propType: declaration.questionToken
                    ? (0, createType_1.createUnionType)({
                        jsDoc: elementNode.jsDoc,
                        types: [
                            (0, createType_1.createUndefinedType)({ jsDoc: undefined }),
                            {
                                ...elementNode,
                                // jsDoc was hoisted to the union type
                                jsDoc: undefined,
                            },
                        ],
                    })
                    : elementNode,
            };
        }
    }
    const type = getType({ project, symbol, declaration, location });
    // Typechecker only gives the type "any" if it's present in a union
    // This means the type of "a" in {a?:any} isn't "any | undefined"
    // So instead we check for the questionmark to detect optional types
    let parsedType;
    if ((type.flags & typescript_1.default.TypeFlags.Any || type.flags & typescript_1.default.TypeFlags.Unknown) &&
        declaration &&
        typescript_1.default.isPropertySignature(declaration)) {
        parsedType =
            symbol.flags & typescript_1.default.SymbolFlags.Optional
                ? (0, createType_1.createUnionType)({
                    jsDoc,
                    types: [(0, createType_1.createUndefinedType)({ jsDoc: undefined }), (0, createType_1.createAnyType)({ jsDoc: undefined })],
                })
                : (0, createType_1.createAnyType)({ jsDoc });
    }
    else {
        parsedType = checkType({ type, location, typeStack, name: symbol.getName(), project });
    }
    return {
        $$id: project.createPropTypeId(type),
        name: symbol.getName(),
        jsDoc,
        propType: parsedType,
        filenames: symbolFilenames,
    };
}
/**
 * Squashes props from:
 * { variant: 'a', href: string } & { variant: 'b' }
 * Into:
 * { variant: 'a' | 'b', href?: string }
 */
function squashPropTypeDefinitions({ propTypeDefinitions, onlyUsedInSomeSignatures, }) {
    const distinctDefinitions = new Map();
    propTypeDefinitions.forEach((definition) => {
        if (!distinctDefinitions.has(definition.$$id)) {
            distinctDefinitions.set(definition.$$id, definition);
        }
    });
    if (distinctDefinitions.size === 1 && !onlyUsedInSomeSignatures) {
        return propTypeDefinitions[0];
    }
    const definitions = Array.from(distinctDefinitions.values());
    const types = definitions.map((definition) => definition.propType);
    if (onlyUsedInSomeSignatures) {
        types.push((0, createType_1.createUndefinedType)({ jsDoc: undefined }));
    }
    return {
        name: definitions[0].name,
        jsDoc: definitions[0].jsDoc,
        propType: (0, createType_1.createUnionType)({
            // TODO: jsDoc from squashing is dropped
            jsDoc: undefined,
            types,
        }),
        filenames: new Set(definitions.flatMap((definition) => Array.from(definition.filenames))),
        $$id: definitions[0].$$id,
    };
}
function generatePropTypesFromNode(params) {
    const parsedComponent = (0, internal_docs_utils_1.getPropsFromComponentNode)(params);
    if (parsedComponent == null) {
        return null;
    }
    const propsFilename = parsedComponent.sourceFile !== undefined ? parsedComponent.sourceFile.fileName : undefined;
    const types = Object.values(parsedComponent.props).map((prop) => {
        const propTypeDefinitions = prop.signatures.map(({ symbol, componentType }) => checkSymbol({
            symbol,
            project: params.project,
            location: parsedComponent.location,
            typeStack: [componentType.id],
        }));
        return squashPropTypeDefinitions({
            propTypeDefinitions,
            onlyUsedInSomeSignatures: prop.onlyUsedInSomeSignatures,
        });
    });
    return {
        name: parsedComponent.name,
        types,
        propsFilename,
    };
}
function getPropTypesFromFile({ filePath, project, shouldInclude: inShouldInclude, shouldResolveObject: inShouldResolveObject, shouldUseObjectForDate, checkDeclarations, }) {
    const sourceFile = project.program.getSourceFile(filePath);
    const reactComponentName = filePath.match(/.*\/([^/]+)/)?.[1];
    const components = [];
    const sigilIds = new Map();
    /**
     *
     * @param sigil - Prefer ts.Type if available since these are re-used in the type checker. Symbols (especially those for literals) are oftentimes re-created on every usage.
     */
    function createPropTypeId(sigil) {
        if (!sigilIds.has(sigil)) {
            sigilIds.set(sigil, sigilIds.size);
        }
        return sigilIds.get(sigil);
    }
    const shouldResolveObject = (data) => {
        if (inShouldResolveObject) {
            const result = inShouldResolveObject(data);
            if (result !== undefined) {
                return result;
            }
        }
        return data.propertyCount <= 50 && data.depth <= 3;
    };
    const shouldInclude = (data) => {
        // ref is a reserved prop name in React
        // for example https://github.com/reactjs/rfcs/pull/107
        // no need to add a prop-type
        if (data.name === 'ref') {
            return false;
        }
        if (inShouldInclude) {
            const result = inShouldInclude(data);
            if (result !== undefined) {
                return result;
            }
        }
        return true;
    };
    const propTypesProject = {
        ...project,
        reactComponentName,
        shouldResolveObject,
        shouldUseObjectForDate,
        shouldInclude,
        createPropTypeId,
    };
    if (sourceFile) {
        typescript_1.default.forEachChild(sourceFile, (node) => {
            const component = generatePropTypesFromNode({
                project: propTypesProject,
                node,
                shouldInclude,
                checkDeclarations,
            });
            if (component != null) {
                components.push(component);
            }
        });
    }
    else {
        throw new Error(`Program doesn't contain file "${filePath}"`);
    }
    return components;
}
//# sourceMappingURL=getPropTypesFromFile.js.map