import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getModalUtilityClass(slot) {
  return generateUtilityClass('MuiModal', slot);
}
const modalClasses = generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);
export default modalClasses;