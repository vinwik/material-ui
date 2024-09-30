import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getStepUtilityClass(slot) {
  return generateUtilityClass('MuiStep', slot);
}
const stepClasses = generateUtilityClasses('MuiStep', ['root', 'indicator', 'horizontal', 'vertical', 'active', 'completed', 'disabled']);
export default stepClasses;