import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getAccordionDetailsUtilityClass(slot) {
  return generateUtilityClass('MuiAccordionDetails', slot);
}
const accordionDetailsClasses = generateUtilityClasses('MuiAccordionDetails', ['root', 'content', 'expanded']);
export default accordionDetailsClasses;