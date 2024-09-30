import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getListItemDecoratorUtilityClass(slot) {
  return generateUtilityClass('MuiListItemDecorator', slot);
}
const listItemDecoratorClasses = generateUtilityClasses('MuiListItemDecorator', ['root']);
export default listItemDecoratorClasses;