import * as babel from '@babel/core';
import { GeneratePropTypesOptions } from './generatePropTypes';
import { PropTypesComponent, PropTypeDefinition, LiteralType } from './models';
export interface InjectPropTypesInFileOptions extends Pick<GeneratePropTypesOptions, 'sortProptypes' | 'includeJSDoc' | 'comment' | 'disablePropTypesTypeChecking' | 'reconcilePropTypes' | 'ensureBabelPluginTransformReactRemovePropTypesIntegration'> {
    /**
     * By default, all unused props are omitted from the result.
     * Set this to true to include them instead.
     */
    includeUnusedProps?: boolean;
    /**
     * Used to control which props are includes in the result
     * @returns true to include the prop, false to skip it, or undefined to
     * use the default behavior
     * @default includeUnusedProps ? true : data.usedProps.includes(data.prop.name)
     */
    shouldInclude?(data: {
        component: PropTypesComponent;
        prop: PropTypeDefinition;
        usedProps: readonly string[];
    }): boolean | undefined;
    /**
     * You can override the order of literals in unions based on the proptype.
     *
     * By default, literals in unions are sorted by:
     * - numbers last, ascending
     * - anything else by their stringified value using localeCompare
     * Note: The order of the literals as they "appear" in the typings cannot be preserved.
     * Sometimes the type checker preserves it, sometimes it doesn't.
     * By always returning 0 from the sort function you keep the order the type checker dictates.
     */
    getSortLiteralUnions?: (component: PropTypesComponent, propType: PropTypeDefinition) => ((a: LiteralType, b: LiteralType) => number) | undefined;
    /**
     * Options passed to babel.transformSync
     */
    babelOptions?: babel.TransformOptions;
}
/**
 * Injects the PropTypes from `parse` into the provided JavaScript code
 * @param components Result from `generateFilePropTypes` to inject into the JavaScript code
 * @param target The JavaScript code to add the PropTypes to
 * @param options Options controlling the final result
 */
export declare function injectPropTypesInFile({ components, target, options, }: {
    components: PropTypesComponent[];
    target: string;
    options?: InjectPropTypesInFileOptions;
}): string | null;
//# sourceMappingURL=injectPropTypesInFile.d.ts.map