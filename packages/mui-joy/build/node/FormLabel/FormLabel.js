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
var _composeClasses = require("@mui/base/composeClasses");
var _styles = require("../styles");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _formLabelClasses = require("./formLabelClasses");
var _FormControlContext = _interopRequireDefault(require("../FormControl/FormControlContext"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    asterisk: ['asterisk']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _formLabelClasses.getFormLabelUtilityClass, {});
};
const FormLabelRoot = (0, _styles.styled)('label', {
  name: 'JoyFormLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  '--Icon-fontSize': 'calc(var(--FormLabel-lineHeight) * 1em)',
  WebkitTapHighlightColor: 'transparent',
  alignSelf: 'var(--FormLabel-alignSelf)',
  // to not fill the block space. It seems like a bug when clicking on empty space (within the label area), even though it is not.
  display: 'flex',
  gap: '2px',
  alignItems: 'center',
  flexWrap: 'wrap',
  userSelect: 'none',
  fontFamily: theme.vars.fontFamily.body,
  fontSize: `var(--FormLabel-fontSize, ${theme.vars.fontSize.sm})`,
  fontWeight: theme.vars.fontWeight.md,
  lineHeight: `var(--FormLabel-lineHeight, ${theme.vars.lineHeight.sm})`,
  color: `var(--FormLabel-color, ${theme.vars.palette.text.primary})`,
  margin: 'var(--FormLabel-margin, 0px)'
}));
const AsteriskComponent = (0, _styles.styled)('span', {
  name: 'JoyFormLabel',
  slot: 'Asterisk',
  overridesResolver: (props, styles) => styles.asterisk
})({
  color: 'var(--FormLabel-asteriskColor)'
});
/**
 *
 * Demos:
 *
 * - [Input](https://mui.com/joy-ui/react-input/)
 *
 * API:
 *
 * - [FormLabel API](https://mui.com/joy-ui/api/form-label/)
 */
const FormLabel = /*#__PURE__*/React.forwardRef(function FormLabel(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyFormLabel'
  });
  const {
    children,
    component = 'label',
    htmlFor,
    id,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const formControl = React.useContext(_FormControlContext.default);
  const required = inProps.required ?? formControl?.required ?? false;
  const ownerState = {
    ...props,
    required
  };
  const classes = useUtilityClasses();
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    additionalProps: {
      htmlFor: htmlFor ?? formControl?.htmlFor,
      id: id ?? formControl?.labelId
    },
    ref,
    className: classes.root,
    elementType: FormLabelRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotAsterisk, asteriskProps] = (0, _useSlot.default)('asterisk', {
    additionalProps: {
      'aria-hidden': true
    },
    className: classes.asterisk,
    elementType: AsteriskComponent,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
    ...rootProps,
    children: [children, required && /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotAsterisk, {
      ...asteriskProps,
      children: ["\u2009", '*']
    })]
  });
});
process.env.NODE_ENV !== "production" ? FormLabel.propTypes /* remove-proptypes */ = {
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
   * @ignore
   */
  htmlFor: _propTypes.default.string,
  /**
   * @ignore
   */
  id: _propTypes.default.string,
  /**
   * The asterisk is added if required=`true`
   */
  required: _propTypes.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    asterisk: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    asterisk: _propTypes.default.elementType,
    root: _propTypes.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
} : void 0;
var _default = exports.default = FormLabel;