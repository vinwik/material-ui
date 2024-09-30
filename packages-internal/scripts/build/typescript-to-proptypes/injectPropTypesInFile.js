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
exports.injectPropTypesInFile = injectPropTypesInFile;
const babel = __importStar(require("@babel/core"));
const babelTypes = __importStar(require("@babel/types"));
const uuid_1 = require("uuid");
const generatePropTypes_1 = require("./generatePropTypes");
/**
 * Gets used props from path
 * @param rootPath The path to search for uses of rootNode
 * @param rootNode The node to start the search, if undefined searches for `this.props`
 */
function getUsedProps(rootPath, rootNode) {
    const usedProps = [];
    function getUsedPropsInternal(node) {
        if (node && babelTypes.isObjectPattern(node)) {
            node.properties.forEach((x) => {
                if (babelTypes.isObjectProperty(x)) {
                    if (babelTypes.isStringLiteral(x.key)) {
                        usedProps.push(x.key.value);
                    }
                    else if (babelTypes.isIdentifier(x.key)) {
                        usedProps.push(x.key.name);
                    }
                    else {
                        console.warn('Possibly used prop missed because object property key was not an Identifier or StringLiteral.');
                    }
                }
                else if (babelTypes.isIdentifier(x.argument)) {
                    // get access props from rest-spread (`{...other}`)
                    getUsedPropsInternal(x.argument);
                }
            });
        }
        else {
            rootPath.traverse({
                VariableDeclarator(path) {
                    const init = path.node.init;
                    if ((node
                        ? babelTypes.isIdentifier(init, { name: node.name })
                        : babelTypes.isMemberExpression(init) &&
                            babelTypes.isThisExpression(init.object) &&
                            babelTypes.isIdentifier(init.property, { name: 'props' })) &&
                        babelTypes.isObjectPattern(path.node.id)) {
                        getUsedPropsInternal(path.node.id);
                    }
                    else if (
                    // currently tracking `inProps` which stands for the given props e.g. `function Modal(inProps) {}`
                    babelTypes.isIdentifier(node, { name: 'inProps' }) &&
                        // `const props = ...` assuming the right-hand side has `inProps` as input.
                        babelTypes.isIdentifier(path.node.id, { name: 'props' })) {
                        getUsedPropsInternal(path.node.id);
                    }
                },
                MemberExpression(path) {
                    if ((node
                        ? babelTypes.isIdentifier(path.node.object, { name: node.name })
                        : babelTypes.isMemberExpression(path.node.object) &&
                            babelTypes.isMemberExpression(path.node.object.object) &&
                            babelTypes.isThisExpression(path.node.object.object.object) &&
                            babelTypes.isIdentifier(path.node.object.object.property, { name: 'props' })) &&
                        babelTypes.isIdentifier(path.node.property)) {
                        usedProps.push(path.node.property.name);
                    }
                },
            });
        }
    }
    getUsedPropsInternal(rootNode);
    return usedProps;
}
function flattenTsAsExpression(node) {
    if (babelTypes.isTSAsExpression(node)) {
        return node.expression;
    }
    return node;
}
function createBabelPlugin({ components, options, mapOfPropTypes, }) {
    const { includeUnusedProps = false, reconcilePropTypes = (_prop, _previous, generated) => generated, ...otherOptions } = options;
    const shouldInclude = (data) => {
        // key is a reserved prop name in React
        // for example https://github.com/reactjs/rfcs/pull/107
        // no need to add a prop-type if we won't generate the docs for it.
        if (data.prop.name === 'key' && data.prop.jsDoc === '@ignore') {
            return false;
        }
        if (options.shouldInclude) {
            const result = options.shouldInclude(data);
            if (result !== undefined) {
                return result;
            }
        }
        return includeUnusedProps ? true : data.usedProps.includes(data.prop.name);
    };
    let importName = '';
    let needImport = false;
    let alreadyImported = false;
    let originalPropTypesPath = null;
    const previousPropTypesSource = new Map();
    function injectPropTypes(injectOptions) {
        const { path, props, usedProps, nodeName } = injectOptions;
        const source = (0, generatePropTypes_1.generatePropTypes)(props, {
            ...otherOptions,
            importedName: importName,
            previousPropTypesSource,
            reconcilePropTypes,
            shouldInclude: (prop) => shouldInclude({ component: props, prop, usedProps }),
        });
        const emptyPropTypes = source === '';
        if (!emptyPropTypes) {
            needImport = true;
        }
        const placeholder = `const a${(0, uuid_1.v4)().replace(/-/g, '_')} = null;`;
        mapOfPropTypes.set(placeholder, source);
        // `Component.propTypes` already exists
        if (originalPropTypesPath !== null) {
            originalPropTypesPath.replaceWith(babel.template.ast(placeholder));
        }
        else if (!emptyPropTypes && babelTypes.isExportNamedDeclaration(path.parent)) {
            // in:
            // export function Component() {}
            // out:
            // function Component() {}
            // Component.propTypes = {}
            // export { Component }
            path.insertAfter(babel.template.ast(`export { ${nodeName} };`));
            path.insertAfter(babel.template.ast(placeholder));
            path.parentPath.replaceWith(path.node);
        }
        else if (!emptyPropTypes && babelTypes.isExportDefaultDeclaration(path.parent)) {
            // in:
            // export default function Component() {}
            // out:
            // function Component() {}
            // Component.propTypes = {}
            // export default Component
            path.insertAfter(babel.template.ast(`export default ${nodeName};`));
            path.insertAfter(babel.template.ast(placeholder));
            path.parentPath.replaceWith(path.node);
        }
        else {
            path.insertAfter(babel.template.ast(placeholder));
        }
    }
    return {
        visitor: {
            Program: {
                enter(path, state) {
                    if (!path.node.body.some((n) => {
                        if (babelTypes.isImportDeclaration(n) &&
                            n.source.value === 'prop-types' &&
                            n.specifiers.length) {
                            importName = n.specifiers[0].local.name;
                            alreadyImported = true;
                            return true;
                        }
                        return false;
                    })) {
                        importName = 'PropTypes';
                    }
                    path.get('body').forEach((nodePath) => {
                        const { node } = nodePath;
                        if (babelTypes.isExpressionStatement(node) &&
                            babelTypes.isAssignmentExpression(node.expression, { operator: '=' }) &&
                            babelTypes.isMemberExpression(node.expression.left) &&
                            babelTypes.isIdentifier(node.expression.left.property, { name: 'propTypes' })) {
                            originalPropTypesPath = nodePath;
                            let maybeObjectExpression = node.expression.right;
                            // Component.propTypes = {} as any;
                            //                       ^^^^^^^^^ expression.right
                            //                       ^^^^^^^^^ TSAsExpression
                            //                       ^^ ObjectExpression
                            // TODO: Not covered by a unit test but by e2e usage with the docs.
                            // Testing infra not setup to handle input=output.
                            if (babelTypes.isTSAsExpression(node.expression.right)) {
                                maybeObjectExpression = node.expression.right.expression;
                            }
                            if (babelTypes.isObjectExpression(maybeObjectExpression)) {
                                const { code } = state.file;
                                maybeObjectExpression.properties.forEach((property) => {
                                    if (babelTypes.isObjectProperty(property)) {
                                        const validatorSource = code.slice(property.value.start, property.value.end);
                                        if (babelTypes.isIdentifier(property.key)) {
                                            previousPropTypesSource.set(property.key.name, validatorSource);
                                        }
                                        else if (babelTypes.isStringLiteral(property.key)) {
                                            previousPropTypesSource.set(property.key.value, validatorSource);
                                        }
                                        else {
                                            console.warn(`${state.filename}: Possibly missed original proTypes source. Can only determine names for 'Identifiers' and 'StringLiteral' but received '${property.key.type}'.`);
                                        }
                                    }
                                });
                            }
                        }
                    });
                },
                exit(path) {
                    if (alreadyImported || !needImport) {
                        return;
                    }
                    const propTypesImport = babel.template.ast(`import ${importName} from 'prop-types'`);
                    const firstImport = path
                        .get('body')
                        .find((nodePath) => babelTypes.isImportDeclaration(nodePath.node));
                    // Insert import after the first one to avoid issues with comment flags
                    if (firstImport) {
                        firstImport.insertAfter(propTypesImport);
                    }
                    else {
                        path.node.body = [propTypesImport, ...path.node.body];
                    }
                },
            },
            FunctionDeclaration(path) {
                const { node } = path;
                // Prevent visiting again
                if (node.hasBeenVisited) {
                    path.skip();
                    return;
                }
                if (!node.id) {
                    return;
                }
                const props = components.find((component) => component.name === node.id.name);
                if (!props) {
                    return;
                }
                // Prevent visiting again
                node.hasBeenVisited = true;
                path.skip();
                const prop = node.params[0];
                injectPropTypes({
                    nodeName: node.id.name,
                    usedProps: babelTypes.isIdentifier(prop) || babelTypes.isObjectPattern(prop)
                        ? getUsedProps(path, prop)
                        : [],
                    path: path,
                    props,
                });
            },
            VariableDeclarator(path) {
                const { node } = path;
                // Prevent visiting again
                if (node.hasBeenVisited) {
                    path.skip();
                    return;
                }
                if (!babelTypes.isIdentifier(node.id)) {
                    return;
                }
                const nodeName = node.id.name;
                const props = components.find((component) => component.name === nodeName);
                if (!props) {
                    return;
                }
                function getFromProp(propsNode) {
                    // Prevent visiting again
                    node.hasBeenVisited = true;
                    path.skip();
                    injectPropTypes({
                        path: path.parentPath,
                        usedProps: babelTypes.isIdentifier(propsNode) || babelTypes.isObjectPattern(propsNode)
                            ? getUsedProps(path, propsNode)
                            : [],
                        props: props,
                        nodeName,
                    });
                }
                const nodeInit = flattenTsAsExpression(node.init);
                if (babelTypes.isArrowFunctionExpression(nodeInit) ||
                    babelTypes.isFunctionExpression(nodeInit)) {
                    getFromProp(nodeInit.params[0]);
                }
                else if (babelTypes.isCallExpression(nodeInit)) {
                    if (nodeInit.callee?.name?.match(/create[A-Z].*/)) {
                        // Any components that are created by a factory function, for example System Box | Container | Grid.
                        getFromProp(node);
                    }
                    else {
                        // x = react.memo(props => <div/>) / react.forwardRef(props => <div />)
                        let resolvedNode = nodeInit;
                        while (babelTypes.isCallExpression(resolvedNode)) {
                            resolvedNode = resolvedNode.arguments[0];
                        }
                        if (babelTypes.isArrowFunctionExpression(resolvedNode) ||
                            babelTypes.isFunctionExpression(resolvedNode)) {
                            getFromProp(resolvedNode.params[0]);
                        }
                    }
                }
            },
            ClassDeclaration(path) {
                const { node } = path;
                // Prevent visiting again
                if (node.hasBeenVisited) {
                    path.skip();
                    return;
                }
                if (!babelTypes.isIdentifier(node.id)) {
                    return;
                }
                const nodeName = node.id.name;
                const props = components.find((component) => component.name === nodeName);
                if (!props) {
                    return;
                }
                // Prevent visiting again
                node.hasBeenVisited = true;
                path.skip();
                injectPropTypes({
                    nodeName,
                    usedProps: getUsedProps(path, undefined),
                    path: path,
                    props,
                });
            },
        },
    };
}
/**
 * Injects the PropTypes from `parse` into the provided JavaScript code
 * @param components Result from `generateFilePropTypes` to inject into the JavaScript code
 * @param target The JavaScript code to add the PropTypes to
 * @param options Options controlling the final result
 */
function injectPropTypesInFile({ components, target, options = {}, }) {
    if (components.length === 0) {
        return target;
    }
    const mapOfPropTypes = new Map();
    const { plugins: babelPlugins = [], ...babelOptions } = options.babelOptions || {};
    const result = babel.transformSync(target, {
        plugins: [
            require.resolve('@babel/plugin-syntax-class-properties'),
            require.resolve('@babel/plugin-syntax-jsx'),
            [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],
            createBabelPlugin({ components, options, mapOfPropTypes }),
            ...(babelPlugins || []),
        ],
        configFile: false,
        babelrc: false,
        retainLines: true,
        ...babelOptions,
    });
    let code = result?.code;
    if (!code) {
        return null;
    }
    // Replace the placeholders with the generated prop-types
    // Workaround for issues with comments getting removed and malformed
    mapOfPropTypes.forEach((value, key) => {
        code = code.replace(key, `\n\n${value}\n\n`);
    });
    return code;
}
//# sourceMappingURL=injectPropTypesInFile.js.map