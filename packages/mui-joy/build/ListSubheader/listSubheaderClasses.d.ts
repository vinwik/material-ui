export interface ListSubheaderClasses {
    /** Class name applied to the root element. */
    root: string;
    /** Class name applied to the root element, if sticky={true}. */
    sticky: string;
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
    /** State class applied to the root element if `variant="plain"`. */
    variantPlain: string;
    /** State class applied to the root element if `variant="soft"`. */
    variantSoft: string;
    /** State class applied to the root element if `variant="outlined"`. */
    variantOutlined: string;
    /** State class applied to the root element if `variant="solid"`. */
    variantSolid: string;
}
export type ListSubheaderClassKey = keyof ListSubheaderClasses;
export declare function getListSubheaderUtilityClass(slot: string): string;
declare const listSubheaderClasses: ListSubheaderClasses;
export default listSubheaderClasses;
