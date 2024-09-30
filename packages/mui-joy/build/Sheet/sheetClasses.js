import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getSheetUtilityClass(slot) {
  return generateUtilityClass('MuiSheet', slot);
}
const sheetClasses = generateUtilityClasses('MuiSheet', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid']);
export default sheetClasses;