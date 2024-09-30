import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getScopedCssBaselineUtilityClass(slot) {
  return generateUtilityClass('MuiScopedCssBaseline', slot);
}
const scopedCssBaselineClasses = generateUtilityClasses('MuiScopedCssBaseline', ['root']);
export default scopedCssBaselineClasses;