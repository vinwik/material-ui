import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'focusVisible', 'disabled', 'sizeSm', 'sizeMd', 'sizeLg', 'loading', 'loadingIndicator']);
export default iconButtonClasses;