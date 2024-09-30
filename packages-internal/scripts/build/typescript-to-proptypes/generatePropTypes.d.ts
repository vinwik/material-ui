import { PropTypeDefinition, PropTypesComponent, LiteralType } from './models';
export interface GeneratePropTypesOptions {
    /**
     * If source itself written in typescript prop-types disable prop-types validation
     * by injecting propTypes as
     * ```jsx
     * .propTypes = { ... } as any
     * ```
     */
    disablePropTypesTypeChecking?: boolean;
    /**
     * Set to true if you want to make sure `babel-plugin-transform-react-remove-prop-types` recognizes the generated .propTypes.
     */
    ensureBabelPluginTransformReactRemovePropTypesIntegration?: boolean;
    /**
     * Enable/disable the default sorting (ascending) or provide your own sort function
     * @default true
     */
    sortProptypes?: boolean | ((a: PropTypeDefinition, b: PropTypeDefinition) => 0 | -1 | 1);
    /**
     * The name used when importing prop-types
     * @default 'PropTypes'
     */
    importedName?: string;
    /**
     * Enable/disable including JSDoc comments
     * @default true
     */
    includeJSDoc?: boolean;
    /**
     * Previous source code of the validator for each prop type
     */
    previousPropTypesSource?: Map<string, string>;
    /**
     * Given the `prop`, the `previous` source of the validator and the `generated` source:
     * What source should be injected? `previous` is `undefined` if the validator
     * didn't exist before
     * @default Uses `generated` source
     */
    reconcilePropTypes?(proptype: PropTypeDefinition, previous: string | undefined, generated: string): string;
    /**
     * Control which PropTypes are included in the final result
     * @param proptype The current PropType about to be converted to text
     */
    shouldInclude?(proptype: PropTypeDefinition): boolean | undefined;
    /**
     * A comment that will be added to the start of the PropTypes code block
     * @example
     * foo.propTypes = {
     *  // Comment goes here
     * }
     */
    comment?: string;
    /**
     * Overrides the given `sortLiteralUnions` based on the proptype.
     * If `undefined` is returned the default `sortLiteralUnions` will be used.
     */
    getSortLiteralUnions?: (component: PropTypesComponent, propType: PropTypeDefinition) => ((a: LiteralType, b: LiteralType) => number) | undefined;
    /**
     * By default literals in unions are sorted by:
     * - numbers last, ascending
     * - anything else by their stringified value using localeCompare
     */
    sortLiteralUnions?: (a: LiteralType, b: LiteralType) => number;
}
/**
 * Generates code from the given component
 * @param component The component to convert to code
 * @param options The options used to control the way the code gets generated
 */
export declare function generatePropTypes(component: PropTypesComponent, options?: GeneratePropTypesOptions): string;
//# sourceMappingURL=generatePropTypes.d.ts.map