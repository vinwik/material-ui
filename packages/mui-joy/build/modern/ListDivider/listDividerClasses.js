import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getListDividerUtilityClass(slot) {
  return generateUtilityClass('MuiListDivider', slot);
}
const listDividerClasses = generateUtilityClasses('MuiListDivider', ['root', 'insetGutter', 'insetStartDecorator', 'insetStartContent', 'horizontal', 'vertical']);
export default listDividerClasses;