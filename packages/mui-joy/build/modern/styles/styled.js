import { createStyled } from '@mui/system';
import defaultTheme from "./defaultTheme.js";
import THEME_ID from "./identifier.js";
const styled = createStyled({
  defaultTheme,
  themeId: THEME_ID
});
export default styled;