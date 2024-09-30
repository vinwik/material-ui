import * as React from 'react';
import { OverridableComponent } from '@mui/types';
import { AutocompleteListboxOwnerState, AutocompleteListboxTypeMap } from './AutocompleteListboxProps';
export declare const StyledAutocompleteListbox: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("../styles").Theme> & {
    ownerState: import("..").ListOwnerState;
} & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement> & {
    ownerState: AutocompleteListboxOwnerState;
}, {}, {}>;
/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/joy-ui/react-autocomplete/)
 *
 * API:
 *
 * - [AutocompleteListbox API](https://mui.com/joy-ui/api/autocomplete-listbox/)
 */
declare const AutocompleteListbox: OverridableComponent<AutocompleteListboxTypeMap>;
export default AutocompleteListbox;
