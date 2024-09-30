import * as React from 'react';
import { AutocompleteProps } from './AutocompleteProps';
/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/joy-ui/react-autocomplete/)
 *
 * API:
 *
 * - [Autocomplete API](https://mui.com/joy-ui/api/autocomplete/)
 */
declare const Autocomplete: AutocompleteComponent;
interface AutocompleteComponent {
    <T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): React.JSX.Element;
    propTypes?: any;
}
export default Autocomplete;
