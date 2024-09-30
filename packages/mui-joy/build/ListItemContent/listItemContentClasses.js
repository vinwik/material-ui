import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getListItemContentUtilityClass(slot) {
  return generateUtilityClass('MuiListItemContent', slot);
}
const listItemContentClasses = generateUtilityClasses('MuiListItemContent', ['root']);
export default listItemContentClasses;