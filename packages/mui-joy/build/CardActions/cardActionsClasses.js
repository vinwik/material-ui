import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getCardActionsUtilityClass(slot) {
  return generateUtilityClass('MuiCardActions', slot);
}
const cardActionsClasses = generateUtilityClasses('MuiCardActions', ['root']);
export default cardActionsClasses;