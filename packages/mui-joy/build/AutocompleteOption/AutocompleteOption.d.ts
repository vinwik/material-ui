import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { AutocompleteOptionOwnerState, AutocompleteOptionTypeMap } from './AutocompleteOptionProps';
export declare const StyledAutocompleteOption: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: AutocompleteOptionOwnerState;
}, React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/joy-ui/react-autocomplete/)
 *
 * API:
 *
 * - [AutocompleteOption API](https://mui.com/joy-ui/api/autocomplete-option/)
 */
declare const AutocompleteOption: OverridableComponent<AutocompleteOptionTypeMap>;
export default AutocompleteOption;
