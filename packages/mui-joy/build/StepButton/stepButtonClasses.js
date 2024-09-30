import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getStepButtonUtilityClass(slot) {
  return generateUtilityClass('MuiStepButton', slot);
}
const stepButtonClasses = generateUtilityClasses('MuiStepButton', ['root']);
export default stepButtonClasses;