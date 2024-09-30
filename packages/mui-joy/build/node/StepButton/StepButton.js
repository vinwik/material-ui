"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("../styles");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _stepClasses = _interopRequireDefault(require("../Step/stepClasses"));
var _stepperClasses = _interopRequireDefault(require("../Stepper/stepperClasses"));
var _stepButtonClasses = _interopRequireDefault(require("./stepButtonClasses"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const StepButtonRoot = (0, _styled.default)('button', {
  name: 'JoyStepButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  return {
    [`.${_stepClasses.default.indicator}:empty + &`]: {
      '--StepIndicator-size': '0px',
      '--Step-gap': '0px'
    },
    [`.${_stepClasses.default.horizontal} &`]: {
      '--_StepButton-alignSelf': 'stretch',
      '--_StepButton-gap': 'var(--Step-gap)'
    },
    [`.${_stepClasses.default.horizontal} &::before`]: {
      '--_StepButton-left': 'calc(-1 * (var(--StepIndicator-size) + var(--Step-gap)))'
    },
    [`.${_stepClasses.default.vertical} &::before`]: {
      '--_StepButton-top': 'calc(-1 * (var(--StepIndicator-size) + var(--Step-gap)))'
    },
    [`.${_stepperClasses.default.vertical} .${_stepClasses.default.vertical} &`]: {
      '--_StepButton-alignItems': 'flex-start'
    },
    [`.${_stepperClasses.default.vertical} &::before`]: {
      '--_StepButton-left': 'calc(-1 * (var(--StepIndicator-size) + var(--Step-gap)))',
      '--_StepButton-top': '0px'
    },
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'relative',
    padding: 0,
    textDecoration: 'none',
    // prevent user agent underline when used as anchor
    font: 'inherit',
    display: 'inline-flex',
    flexDirection: 'inherit',
    alignItems: 'var(--_StepButton-alignItems, inherit)',
    alignSelf: 'var(--_StepButton-alignSelf)',
    gap: 'var(--_StepButton-gap)',
    [theme.focus.selector]: theme.focus.default,
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 'var(--_StepButton-top, 0)',
      right: 0,
      bottom: 0,
      left: 'var(--_StepButton-left, 0)'
    }
  };
});

/**
 *
 * Demos:
 *
 * - [Stepper](https://mui.com/joy-ui/react-stepper/)
 *
 * API:
 *
 * - [StepButton API](https://mui.com/joy-ui/api/step-button/)
 */
const StepButton = /*#__PURE__*/React.forwardRef(function StepButton(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyStepButton'
  });
  const {
    className,
    component = 'button',
    children,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(_stepButtonClasses.default.root, className),
    elementType: StepButtonRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      type: 'button'
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? StepButton.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the StepButton if `src` is not set.
   * This can be an element, or just a string.
   */
  children: _propTypes.default.node,
  /**
   * @ignore
   */
  className: _propTypes.default.string,
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
var _default = exports.default = StepButton;