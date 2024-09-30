"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormControlRoot = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _utils = require("@mui/utils");
var _composeClasses = require("@mui/base/composeClasses");
var _styles = require("../styles");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _FormControlContext = _interopRequireDefault(require("./FormControlContext"));
var _formControlClasses = _interopRequireWildcard(require("./formControlClasses"));
var _switchClasses = _interopRequireDefault(require("../Switch/switchClasses"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    disabled,
    error,
    size,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation, disabled && 'disabled', error && 'error', color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _formControlClasses.getFormControlUtilityClass, {});
};
const FormControlRoot = exports.FormControlRoot = (0, _styled.default)('div', {
  name: 'JoyFormControl',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  '--unstable_RadioGroup-margin': '0.5rem 0',
  '--FormLabel-alignSelf': ownerState.orientation === 'horizontal' ? 'align-items' : 'flex-start',
  '--FormLabel-asteriskColor': theme.vars.palette.danger[500],
  ...(ownerState.size === 'sm' && {
    '--FormLabel-fontSize': theme.vars.fontSize.xs,
    '--FormLabel-lineHeight': theme.vars.lineHeight.xl,
    '--FormLabel-margin': ownerState.orientation === 'horizontal' ? '0 0.5rem 0 0' : '0 0 0.25rem 0',
    '--FormHelperText-fontSize': theme.vars.fontSize.xs,
    '--FormHelperText-lineHeight': theme.vars.lineHeight.xl
  }),
  ...(ownerState.size === 'md' && {
    '--FormLabel-fontSize': theme.vars.fontSize.sm,
    '--FormLabel-lineHeight': theme.vars.lineHeight.sm,
    '--FormLabel-margin': ownerState.orientation === 'horizontal' ? '0 0.75rem 0 0' : '0 0 0.375rem 0',
    '--FormHelperText-fontSize': theme.vars.fontSize.sm,
    '--FormHelperText-lineHeight': theme.vars.lineHeight.sm
  }),
  ...(ownerState.size === 'lg' && {
    '--FormLabel-fontSize': theme.vars.fontSize.md,
    '--FormLabel-lineHeight': theme.vars.lineHeight.md,
    '--FormLabel-margin': ownerState.orientation === 'horizontal' ? '0 1rem 0 0' : '0 0 0.5rem 0',
    '--FormHelperText-fontSize': theme.vars.fontSize.sm,
    '--FormHelperText-lineHeight': theme.vars.lineHeight.sm
  }),
  ...(ownerState.color && {
    '--FormHelperText-color': theme.vars.palette[ownerState.color]?.[500]
  }),
  '--FormHelperText-margin': '0.375rem 0 0 0',
  [`&.${_formControlClasses.default.error}`]: {
    '--FormHelperText-color': theme.vars.palette.danger[500]
  },
  [`&.${_formControlClasses.default.disabled}`]: {
    '--FormLabel-color': theme.variants.plainDisabled?.[ownerState.color || 'neutral']?.color,
    '--FormHelperText-color': theme.variants.plainDisabled?.[ownerState.color || 'neutral']?.color
  },
  display: 'flex',
  position: 'relative',
  // for keeping the control action area, for example Switch
  flexDirection: ownerState.orientation === 'horizontal' ? 'row' : 'column',
  ...(ownerState.orientation === 'horizontal' && {
    [`& > label ~ .${_switchClasses.default.root}`]: {
      '--unstable_Switch-margin': '0 0 0 auto'
    }
  })
}));
/**
 *
 * Demos:
 *
 * - [Input](https://mui.com/joy-ui/react-input/)
 *
 * API:
 *
 * - [FormControl API](https://mui.com/joy-ui/api/form-control/)
 */
const FormControl = /*#__PURE__*/React.forwardRef(function FormControl(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyFormControl'
  });
  const {
    id: idOverride,
    className,
    component = 'div',
    disabled = false,
    required = false,
    error = false,
    color,
    size = 'md',
    orientation = 'vertical',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const id = (0, _utils.unstable_useId)(idOverride);
  const [helperText, setHelperText] = React.useState(null);
  const ownerState = {
    ...props,
    id,
    component,
    color,
    disabled,
    error,
    required,
    size,
    orientation
  };
  let registerEffect;
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const registeredInput = React.useRef(false);
    registerEffect = () => {
      if (registeredInput.current) {
        console.error(['Joy: A FormControl can contain only one control component (Autocomplete | Input | Textarea | Select | RadioGroup)', 'You should not mix those components inside a single FormControl instance'].join('\n'));
      }
      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }
  const classes = useUtilityClasses(ownerState);
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: FormControlRoot,
    externalForwardedProps: {
      ...other,
      component,
      slots,
      slotProps
    },
    ownerState
  });
  const formControlContextValue = React.useMemo(() => ({
    disabled,
    required,
    error,
    color,
    size,
    htmlFor: id,
    labelId: `${id}-label`,
    'aria-describedby': helperText ? `${id}-helper-text` : undefined,
    setHelperText,
    registerEffect: registerEffect
  }), [color, disabled, error, helperText, id, registerEffect, required, size]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlContext.default.Provider, {
    value: formControlContextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
      ...rootProps
    })
  });
});
process.env.NODE_ENV !== "production" ? FormControl.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,
  /**
   * @ignore
   */
  className: _propTypes.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * If `true`, the children are in disabled state.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * If `true`, the children will indicate an error.
   * @default false
   */
  error: _propTypes.default.bool,
  /**
   * @ignore
   */
  id: _propTypes.default.string,
  /**
   * The content direction flow.
   * @default 'vertical'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  /**
   * If `true`, the user must specify a value for the input before the owning form can be submitted.
   * If `true`, the asterisk appears on the FormLabel.
   * @default false
   */
  required: _propTypes.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['sm', 'md', 'lg']), _propTypes.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    root: _propTypes.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
var _default = exports.default = FormControl;