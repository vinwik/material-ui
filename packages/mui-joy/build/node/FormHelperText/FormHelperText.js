"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("@mui/utils");
var _composeClasses = require("@mui/base/composeClasses");
var _styles = require("../styles");
var _formHelperTextClasses = require("./formHelperTextClasses");
var _FormControlContext = _interopRequireDefault(require("../FormControl/FormControlContext"));
var _formControlClasses = _interopRequireDefault(require("../FormControl/formControlClasses"));
var _formLabelClasses = _interopRequireDefault(require("../FormLabel/formLabelClasses"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _formHelperTextClasses.getFormHelperTextUtilityClass, {});
};
const FormHelperTextRoot = (0, _styles.styled)('div', {
  name: 'JoyFormHelperText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  '--Icon-fontSize': 'calc(var(--FormHelperText-lineHeight) * 1em)',
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  fontFamily: theme.vars.fontFamily.body,
  fontSize: `var(--FormHelperText-fontSize, ${theme.vars.fontSize.sm})`,
  lineHeight: `var(--FormHelperText-lineHeight, ${theme.vars.lineHeight.sm})`,
  color: `var(--FormHelperText-color, ${theme.vars.palette.text.tertiary})`,
  margin: 'var(--FormHelperText-margin, 0px)',
  [`.${_formLabelClasses.default.root} + &`]: {
    '--FormHelperText-margin': '0px' // remove the margin if the helper text is next to the form label.
  },
  [`.${_formControlClasses.default.error} &`]: {
    '--Icon-color': 'currentColor'
  }
}));
/**
 *
 * Demos:
 *
 * - [Input](https://mui.com/joy-ui/react-input/)
 *
 * API:
 *
 * - [FormHelperText API](https://mui.com/joy-ui/api/form-helper-text/)
 */
const FormHelperText = /*#__PURE__*/React.forwardRef(function FormHelperText(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyFormHelperText'
  });
  const {
    children,
    component,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const rootRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(rootRef, ref);
  const formControl = React.useContext(_FormControlContext.default);
  const setHelperText = formControl?.setHelperText;
  React.useEffect(() => {
    setHelperText?.(rootRef.current);
    return () => {
      setHelperText?.(null);
    };
  }, [setHelperText]);
  const classes = useUtilityClasses();
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref: handleRef,
    elementType: FormHelperTextRoot,
    externalForwardedProps,
    ownerState: props,
    additionalProps: {
      as: component,
      id: formControl?.['aria-describedby']
    },
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? FormHelperText.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
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
var _default = exports.default = FormHelperText;