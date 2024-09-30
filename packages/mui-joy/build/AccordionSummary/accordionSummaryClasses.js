import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getAccordionSummaryUtilityClass(slot) {
  return generateUtilityClass('MuiAccordionSummary', slot);
}
const accordionSummaryClasses = generateUtilityClasses('MuiAccordionSummary', ['root', 'button', 'indicator', 'disabled', 'expanded']);
export default accordionSummaryClasses;