import { OverridableComponent } from '@mui/types';
import { LinearProgressTypeMap } from './LinearProgressProps';
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 *
 * Demos:
 *
 * - [Linear Progress](https://mui.com/joy-ui/react-linear-progress/)
 *
 * API:
 *
 * - [LinearProgress API](https://mui.com/joy-ui/api/linear-progress/)
 */
declare const LinearProgress: OverridableComponent<LinearProgressTypeMap>;
export default LinearProgress;
