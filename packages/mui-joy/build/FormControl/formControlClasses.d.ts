export interface FormControlClasses {
    /** Class name applied to the root element. */
    root: string;
    /** Class name applied to the root element if `disabled={true}`. */
    disabled: string;
    /** State class applied to the root element if `error={true}`. */
    error: string;
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
    /** Class name applied to the root element if `size="sm"`. */
    sizeSm: string;
    /** Class name applied to the root element if `size="md"`. */
    sizeMd: string;
    /** Class name applied to the root element if `size="lg"`. */
    sizeLg: string;
    /** Class name applied to the root element if `orientation="horizontal"`. */
    horizontal: string;
    /** Class name applied to the root element if `orientation="vertical"`. */
    vertical: string;
}
export type FormControlClassKey = keyof FormControlClasses;
export declare function getFormControlUtilityClass(slot: string): string;
declare const formControlClasses: FormControlClasses;
export default formControlClasses;
