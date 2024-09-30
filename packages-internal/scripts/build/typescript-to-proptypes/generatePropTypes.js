"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePropTypes = generatePropTypes;
const lodash_1 = __importDefault(require("lodash"));
const createType_1 = require("./createType");
function defaultSortLiteralUnions(a, b) {
    const { value: valueA } = a;
    const { value: valueB } = b;
    // numbers ascending
    if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
    }
    // numbers last
    if (typeof valueA === 'number') {
        return 1;
    }
    if (typeof valueB === 'number') {
        return -1;
    }
    // sort anything else by their stringified value
    return String(valueA).localeCompare(String(valueB));
}
/**
 * Generates code from the given component
 * @param component The component to convert to code
 * @param options The options used to control the way the code gets generated
 */
function generatePropTypes(component, options = {}) {
    const { disablePropTypesTypeChecking = false, ensureBabelPluginTransformReactRemovePropTypesIntegration = false, importedName = 'PropTypes', includeJSDoc = true, sortProptypes = true, previousPropTypesSource = new Map(), reconcilePropTypes = (_prop, _previous, generated) => generated, shouldInclude, getSortLiteralUnions = () => defaultSortLiteralUnions, } = options;
    function jsDoc(documentedNode) {
        if (!includeJSDoc || !documentedNode.jsDoc) {
            return '';
        }
        return `/**\n* ${documentedNode.jsDoc
            .split(/\r?\n/)
            .reduce((prev, curr) => `${prev}\n* ${curr}`)}\n*/\n`;
    }
    function generatePropType(propType, context) {
        if (propType.type === 'InterfaceNode') {
            return `${importedName}.shape({\n${propType.types
                .slice()
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([name, type]) => {
                let regex = /^(UnionNode|DOMElementNode)$/;
                if (name !== 'children') {
                    regex = /^(UnionNode|DOMElementNode|ElementNode)$/;
                }
                return `"${name}": ${generatePropType(type, context)}${!type.type.match(regex) ? '.isRequired' : ''}`;
            })
                .join(',\n')}\n})`;
        }
        if (propType.type === 'FunctionNode') {
            return `${importedName}.func`;
        }
        if (propType.type === 'StringNode') {
            return `${importedName}.string`;
        }
        if (propType.type === 'boolean') {
            return `${importedName}.bool`;
        }
        if (propType.type === 'NumericNode') {
            return `${importedName}.number`;
        }
        if (propType.type === 'LiteralNode') {
            return `${importedName}.oneOf([${jsDoc(propType)}${propType.value}])`;
        }
        if (propType.type === 'ObjectNode') {
            return `${importedName}.object`;
        }
        if (propType.type === 'any') {
            // key isn't a prop like the others, see
            // https://github.com/mui/material-ui/issues/25304
            if (context.propTypeDefinition.name === 'key') {
                return '() => null';
            }
            return `${importedName}.any`;
        }
        if (propType.type === 'ElementNode') {
            return `${importedName}.${propType.elementType}`;
        }
        if (propType.type === 'InstanceOfNode') {
            return `${importedName}.instanceOf(${propType.instance})`;
        }
        if (propType.type === 'DOMElementNode') {
            return `function (props, propName) {
			if (props[propName] == null) {
				return ${propType.optional
                ? 'null'
                : `new Error("Prop '" + propName + "' is required but wasn't specified")`}
			} else if (typeof props[propName] !== 'object' || props[propName].nodeType !== 1) {
				return new Error("Expected prop '" + propName + "' to be of type Element")
			}
		}`;
        }
        if (propType.type === 'array') {
            if (propType.arrayType.type === 'any') {
                return `${importedName}.array`;
            }
            return `${importedName}.arrayOf(${generatePropType(propType.arrayType, context)})`;
        }
        if (propType.type === 'UnionNode') {
            const uniqueTypes = (0, createType_1.uniqueUnionTypes)(propType).types;
            const isOptional = uniqueTypes.some((type) => type.type === 'UndefinedNode' || (type.type === 'LiteralNode' && type.value === 'null'));
            const nonNullishUniqueTypes = uniqueTypes.filter((type) => {
                return (type.type !== 'UndefinedNode' && !(type.type === 'LiteralNode' && type.value === 'null'));
            });
            if (uniqueTypes.length === 2 && uniqueTypes.some((type) => type.type === 'DOMElementNode')) {
                return generatePropType((0, createType_1.createDOMElementType)({ jsDoc: undefined, optional: isOptional }), context);
            }
            let [literals, rest] = lodash_1.default.partition(isOptional ? nonNullishUniqueTypes : uniqueTypes, (type) => type.type === 'LiteralNode');
            const sortLiteralUnions = getSortLiteralUnions(context.component, context.propTypeDefinition) ||
                defaultSortLiteralUnions;
            literals = literals.sort(sortLiteralUnions);
            const nodeToStringName = (type) => {
                if (type.type === 'InstanceOfNode') {
                    return `${type.type}.${type.instance}`;
                }
                if (type.type === 'InterfaceNode') {
                    // An interface is PropTypes.shape
                    // Use `ShapeNode` to get it sorted in the correct order
                    return `ShapeNode`;
                }
                return type.type;
            };
            rest = rest.sort((a, b) => nodeToStringName(a).localeCompare(nodeToStringName(b)));
            if (literals.find((x) => x.value === 'true') && literals.find((x) => x.value === 'false')) {
                rest.push((0, createType_1.createBooleanType)({ jsDoc: undefined }));
                literals = literals.filter((x) => x.value !== 'true' && x.value !== 'false');
            }
            const literalProps = literals.length !== 0
                ? `${importedName}.oneOf([${literals
                    .map((x) => `${jsDoc(x)}${x.value}`)
                    .reduce((prev, curr) => `${prev},${curr}`)}])`
                : '';
            if (rest.length === 0) {
                return `${literalProps}${isOptional ? '' : '.isRequired'}`;
            }
            if (literals.length === 0 && rest.length === 1) {
                return `${generatePropType(rest[0], context)}${isOptional ? '' : '.isRequired'}`;
            }
            return `${importedName}.oneOfType([${literalProps ? `${literalProps}, ` : ''}${rest
                .map((type) => generatePropType(type, context))
                .reduce((prev, curr) => `${prev},${curr}`)}])${isOptional ? '' : '.isRequired'}`;
        }
        throw new Error(`Nothing to handle node of type "${propType.type}" in "${context.propTypeDefinition.name}"`);
    }
    function generatePropTypeDefinition(propTypeDefinition, context) {
        let isRequired = true;
        if (propTypeDefinition.propType.type === 'DOMElementNode') {
            // DOMElement generator decides
            isRequired = undefined;
        }
        else if (propTypeDefinition.propType.type === 'UnionNode') {
            // union generator decides
            isRequired = undefined;
        }
        const validatorSource = reconcilePropTypes(propTypeDefinition, previousPropTypesSource.get(propTypeDefinition.name), `${generatePropType(propTypeDefinition.propType, {
            component: context.component,
            propTypeDefinition,
        })}${isRequired === true ? '.isRequired' : ''}`);
        return `${jsDoc(propTypeDefinition)}"${propTypeDefinition.name}": ${validatorSource},`;
    }
    const propTypes = component.types.slice();
    if (typeof sortProptypes === 'function') {
        propTypes.sort(sortProptypes);
    }
    else if (sortProptypes === true) {
        propTypes.sort((a, b) => a.name.localeCompare(b.name));
    }
    let filteredNodes = propTypes;
    if (shouldInclude) {
        filteredNodes = filteredNodes.filter((type) => shouldInclude(type));
    }
    if (filteredNodes.length === 0) {
        return '';
    }
    const generated = filteredNodes
        .map((prop) => generatePropTypeDefinition(prop, { component }))
        .reduce((prev, curr) => `${prev}\n${curr}`);
    if (generated.length === 0) {
        return '';
    }
    const comment = options.comment &&
        `// ${options.comment.split(/\r?\n/gm).reduce((prev, curr) => `${prev}\n// ${curr}`)}\n`;
    const propTypesMemberTrailingComment = ensureBabelPluginTransformReactRemovePropTypesIntegration
        ? '/* remove-proptypes */'
        : '';
    const propTypesCasting = disablePropTypesTypeChecking ? ' as any' : '';
    const propTypesBanner = comment !== undefined ? comment : '';
    return `${component.name}.propTypes ${propTypesMemberTrailingComment}= {\n${propTypesBanner}${generated}\n}${propTypesCasting}`;
}
//# sourceMappingURL=generatePropTypes.js.map