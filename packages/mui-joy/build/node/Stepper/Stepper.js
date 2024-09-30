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
var _base = require("@mui/base");
var _utils = require("@mui/utils");
var _styles = require("../styles");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _stepperClasses = require("./stepperClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    size,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _stepperClasses.getStepperUtilityClass, {});
};
const StepperRoot = (0, _styled.default)('ol', {
  name: 'JoyStepper',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  return {
    '--Stepper-indicatorColumn': 'auto',
    // For vertical stepper, to control the column width of the indicator.
    '--Step-connectorThickness': '1px',
    '--Step-indicatorDotSize': '0.375rem',
    boxSizing: 'border-box',
    display: 'flex',
    margin: 0,
    // Reset browser default style.
    padding: 0,
    // Reset browser default style.
    variants: [{
      props: {
        size: 'sm'
      },
      style: {
        '--Stepper-verticalGap': '0.5rem',
        '--Step-gap': '0.375rem',
        '--Step-connectorInset': '0.25rem',
        '--StepIndicator-size': '1.25rem',
        ...theme.typography['title-sm']
      }
    }, {
      props: {
        size: 'md'
      },
      style: {
        '--Stepper-verticalGap': '0.75rem',
        '--Step-gap': '0.5rem',
        '--Step-connectorInset': '0.375rem',
        '--StepIndicator-size': '1.5rem',
        ...theme.typography['title-md']
      }
    }, {
      props: {
        size: 'lg'
      },
      style: {
        '--Stepper-verticalGap': '0.75rem',
        '--Step-gap': '0.5rem',
        '--Step-connectorInset': '0.5rem',
        '--StepIndicator-size': '1.75rem',
        ...theme.typography['title-lg']
      }
    }, {
      props: {
        orientation: 'vertical'
      },
      style: {
        flexDirection: 'column',
        gap: 'var(--Stepper-verticalGap)'
      }
    }]
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
 * - [Stepper API](https://mui.com/joy-ui/api/stepper/)
 */
const Stepper = /*#__PURE__*/React.forwardRef(function Stepper(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyStepper'
  });
  const {
    className,
    component = 'ol',
    size = 'md',
    children,
    orientation = 'horizontal',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    orientation,
    size
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: StepperRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: React.Children.map(children, (child, index) => {
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return child;
      }
      const extraProps = {};
      if (index === 0) {
        extraProps['data-first-child'] = '';
      }
      if (index === React.Children.count(children) - 1) {
        extraProps['data-last-child'] = '';
      }
      return /*#__PURE__*/React.cloneElement(child, extraProps);
    })
  });
});
process.env.NODE_ENV !== "production" ? Stepper.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the Stepper if `src` is not set.
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
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['lg', 'md', 'sm']), _propTypes.default.string]),
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
var _default = exports.default = Stepper;