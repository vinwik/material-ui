import { generateUtilityClass, generateUtilityClasses } from "../className/index.js";
export function getCardCoverUtilityClass(slot) {
  return generateUtilityClass('MuiCardCover', slot);
}
const cardCoverClasses = generateUtilityClasses('MuiCardCover', ['root']);
export default cardCoverClasses;