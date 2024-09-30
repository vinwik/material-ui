export interface AutocompleteListboxClasses {
    /** Class name applied to the root element. */
    root: string;
    /** Class name applied to the root element if `size="sm"`. */
    sizeSm: string;
    /** Class name applied to the root element if `size="md"`. */
    sizeMd: string;
    /** Class name applied to the root element if `size="lg"`. */
    sizeLg: string;
    /** Class name applied to the root element if `color="primary"`. */
    colorPrimary: string;
    /** Class name applied to the root element if `color="neutral"`. */
    colorNeutral: string;
    /** Class name applied to the root element if `color="danger"`. */
    colorDanger: string;
    /** Class name applied to the root element if `color="success"`. */
    colorSuccess: string;
    /** Class name applied to the root element if `color="warning"`. */
    colorWarning: string;
    /** Class name applied to the root element when color inversion is triggered. */
    colorContext: string;
    /** Class name applied to the root element if `variant="plain"`. */
    variantPlain: string;
    /** Class name applied to the root element if `variant="outlined"`. */
    variantOutlined: string;
    /** Class name applied to the root element if `variant="soft"`. */
    variantSoft: string;
    /** Class name applied to the root element if `variant="solid"`. */
    variantSolid: string;
}
export type AutocompleteListboxClassKey = keyof AutocompleteListboxClasses;
export declare function getAutocompleteListboxUtilityClass(slot: string): string;
declare const autocompleteListboxClasses: AutocompleteListboxClasses;
export default autocompleteListboxClasses;
