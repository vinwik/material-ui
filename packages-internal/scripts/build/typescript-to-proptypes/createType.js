"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAnyType = createAnyType;
exports.createArrayType = createArrayType;
exports.createBooleanType = createBooleanType;
exports.createDOMElementType = createDOMElementType;
exports.createElementType = createElementType;
exports.createFunctionType = createFunctionType;
exports.createInstanceOfType = createInstanceOfType;
exports.createInterfaceType = createInterfaceType;
exports.createLiteralType = createLiteralType;
exports.createNumericType = createNumericType;
exports.createObjectType = createObjectType;
exports.createStringType = createStringType;
exports.createUndefinedType = createUndefinedType;
exports.uniqueUnionTypes = uniqueUnionTypes;
exports.createUnionType = createUnionType;
const lodash_1 = __importDefault(require("lodash"));
const getTypeHash_1 = __importDefault(require("./getTypeHash"));
function createAnyType(init) {
    return {
        type: 'any',
        jsDoc: init.jsDoc,
    };
}
function createArrayType(init) {
    return {
        type: 'array',
        jsDoc: init.jsDoc,
        arrayType: init.arrayType,
    };
}
function createBooleanType(init) {
    return {
        type: 'boolean',
        jsDoc: init.jsDoc,
    };
}
function createDOMElementType(init) {
    return {
        type: 'DOMElementNode',
        jsDoc: init.jsDoc,
        optional: init.optional,
    };
}
function createElementType(init) {
    return {
        type: 'ElementNode',
        jsDoc: init.jsDoc,
        elementType: init.elementType,
    };
}
function createFunctionType(init) {
    return {
        type: 'FunctionNode',
        jsDoc: init.jsDoc,
    };
}
function createInstanceOfType(init) {
    return {
        type: 'InstanceOfNode',
        instance: init.instance,
        jsDoc: init.jsDoc,
    };
}
function createInterfaceType(init) {
    return {
        type: 'InterfaceNode',
        jsDoc: init.jsDoc,
        types: init.types ?? [],
    };
}
function createLiteralType(init) {
    return {
        type: 'LiteralNode',
        value: init.value,
        jsDoc: init.jsDoc,
    };
}
function createNumericType(init) {
    return {
        type: 'NumericNode',
        jsDoc: init.jsDoc,
    };
}
function createObjectType(init) {
    return {
        type: 'ObjectNode',
        jsDoc: init.jsDoc,
    };
}
function createStringType(init) {
    return {
        type: 'StringNode',
        jsDoc: init.jsDoc,
    };
}
function createUndefinedType(init) {
    return {
        type: 'UndefinedNode',
        jsDoc: init.jsDoc,
    };
}
function uniqueUnionTypes(node) {
    return {
        type: node.type,
        jsDoc: node.jsDoc,
        types: lodash_1.default.uniqBy(node.types, (type) => {
            return (0, getTypeHash_1.default)(type);
        }),
    };
}
function createUnionType(init) {
    const flatTypes = [];
    function flattenTypes(nodes) {
        nodes.forEach((type) => {
            if (type.type === 'UnionNode') {
                flattenTypes(type.types);
            }
            else {
                flatTypes.push(type);
            }
        });
    }
    flattenTypes(init.types);
    return uniqueUnionTypes({
        type: 'UnionNode',
        jsDoc: init.jsDoc,
        types: flatTypes,
    });
}
//# sourceMappingURL=createType.js.map