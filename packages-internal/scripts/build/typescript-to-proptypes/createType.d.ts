import ts from 'typescript';
import { PropType, ArrayType, LiteralType, BooleanType, AnyType, UnionType, BasePropType, ElementType, DOMElementType, InstanceOfType, InterfaceType, FunctionType, StringType, ObjectType, NumericType } from './models';
export declare function createAnyType(init: {
    jsDoc: string | undefined;
}): AnyType;
export declare function createArrayType(init: {
    arrayType: PropType;
    jsDoc: string | undefined;
}): ArrayType;
export declare function createBooleanType(init: {
    jsDoc: string | undefined;
}): BooleanType;
export declare function createDOMElementType(init: {
    optional: boolean | undefined;
    jsDoc: string | undefined;
}): DOMElementType;
export declare function createElementType(init: {
    elementType: ElementType['elementType'];
    jsDoc: string | undefined;
}): ElementType;
export declare function createFunctionType(init: {
    jsDoc: string | undefined;
}): FunctionType;
export declare function createInstanceOfType(init: {
    jsDoc: string | undefined;
    instance: string;
}): InstanceOfType;
export declare function createInterfaceType(init: {
    jsDoc: string | undefined;
    types: ReadonlyArray<[string, PropType]> | undefined;
}): InterfaceType;
export declare function createLiteralType(init: {
    value: string | number | ts.PseudoBigInt;
    jsDoc: string | undefined;
}): LiteralType;
export declare function createNumericType(init: {
    jsDoc: string | undefined;
}): NumericType;
export declare function createObjectType(init: {
    jsDoc: string | undefined;
}): ObjectType;
export declare function createStringType(init: {
    jsDoc: string | undefined;
}): StringType;
export interface UndefinedType extends BasePropType {
    type: 'UndefinedNode';
}
export declare function createUndefinedType(init: {
    jsDoc: string | undefined;
}): UndefinedType;
export declare function uniqueUnionTypes(node: UnionType): UnionType;
export declare function createUnionType(init: {
    jsDoc: string | undefined;
    types: readonly PropType[];
}): UnionType;
//# sourceMappingURL=createType.d.ts.map