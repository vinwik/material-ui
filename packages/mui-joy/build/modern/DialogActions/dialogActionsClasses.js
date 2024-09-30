import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass('MuiDialogActions', slot);
}
const dialogActionsClasses = generateUtilityClasses('MuiDialogActions', ['root']);
export default dialogActionsClasses;