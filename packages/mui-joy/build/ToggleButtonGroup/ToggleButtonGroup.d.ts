import * as React from 'react';
import { OverrideProps, DefaultComponentProps } from '@mui/types';
import { ToggleButtonGroupTypeMap, SupportedValue } from './ToggleButtonGroupProps';
/**
 * ⚠️ ToggleButtonGroup must have Button and/or IconButton as direct children.
 *
 * Demos:
 *
 * - [Toggle Button Group](https://mui.com/joy-ui/react-toggle-button-group/)
 *
 * API:
 *
 * - [ToggleButtonGroup API](https://mui.com/joy-ui/api/toggle-button-group/)
 */
declare const ToggleButtonGroup: ToggleButtonGroupComponent;
interface ToggleButtonGroupComponent {
    <TValue extends SupportedValue, C extends React.ElementType>(props: {
        /**
         * The component used for the root node.
         * Either a string to use a HTML element or a component.
         */
        component: C;
    } & OverrideProps<ToggleButtonGroupTypeMap<TValue>, C>): React.JSX.Element | null;
    <TValue extends SupportedValue>(props: DefaultComponentProps<ToggleButtonGroupTypeMap<TValue>>): React.JSX.Element | null;
    propTypes?: any;
}
export default ToggleButtonGroup;
