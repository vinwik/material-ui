import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getModalOverflowUtilityClass(slot) {
  return generateUtilityClass('MuiModalOverflow', slot);
}
const modalOverflowClasses = generateUtilityClasses('MuiModalOverflow', ['root']);
export default modalOverflowClasses;