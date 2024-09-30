export interface MenuButtonClasses {
    /** Class name applied to the root element. */
    root: string;
    /** Class name applied to the root element if `color="primary"`. */
    colorPrimary: string;
    /** Class name applied to the root element if `color="neutral"`. */
    colorNeutral: string;
    /** Class name applied to the root element if `color="danger"`. */
    colorDanger: string;
    /** Class name applied to the root element if `color="info"`. */
    colorInfo: string;
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
    /** State class applied to the root element if `disabled={true}`. */
    disabled: string;
    /** Class name applied to the root element if `size="sm"`. */
    sizeSm: string;
    /** Class name applied to the root element if `size="md"`. */
    sizeMd: string;
    /** Class name applied to the root element if `size="lg"`. */
    sizeLg: string;
    /** Class name applied to the root element if `fullWidth={true}`. */
    fullWidth: string;
    /** Class name applied to the startDecorator element if supplied. */
    startDecorator: string;
    /** Class name applied to the endDecorator element if supplied. */
    endDecorator: string;
    /** Class name applied to the root element if `loading={true}`. */
    loading: string;
    /** Class name applied to the loadingIndicatorCenter element. */
    loadingIndicatorCenter: string;
}
export type MenuButtonClassKey = keyof MenuButtonClasses;
export declare function getMenuButtonUtilityClass(slot: string): string;
declare const menuButtonClasses: MenuButtonClasses;
export default menuButtonClasses;
