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
var _cardOverflowClasses = require("./cardOverflowClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _buttonClasses = _interopRequireDefault(require("../Button/buttonClasses"));
var _cardClasses = _interopRequireDefault(require("../Card/cardClasses"));
var _modalDialogClasses = _interopRequireDefault(require("../ModalDialog/modalDialogClasses"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ['root', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _cardOverflowClasses.getCardOverflowUtilityClass, {});
};
const CardOverflowRoot = (0, _styled.default)('div', {
  name: 'JoyCardOverflow',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const childRadius = 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))';
  return {
    alignSelf: 'stretch',
    // prevent shrinking if parent's align-items is not initial
    position: 'relative',
    display: 'flex',
    flexDirection: 'var(--_CardOverflow-flexDirection)',
    margin: 'var(--_CardOverflow-margin)',
    borderRadius: 'var(--_CardOverflow-radius)',
    padding: 'var(--_CardOverflow-padding)',
    [`.${_cardClasses.default.vertical} &, .${_cardClasses.default.horizontal} .${_cardClasses.default.vertical} &, .${_modalDialogClasses.default.root} &`]: {
      '--_CardOverflow-flexDirection': 'column',
      // required to make AspectRatio works
      '--AspectRatio-margin': '0 calc(-1 * var(--Card-padding))',
      '--_CardOverflow-margin': '0 var(--CardOverflow-offset)',
      '--_CardOverflow-padding': '0 var(--Card-padding)',
      '&[data-first-child]': {
        '--AspectRatio-radius': `${childRadius} ${childRadius} 0 0`,
        '--_CardOverflow-radius': 'var(--CardOverflow-radius) var(--CardOverflow-radius) 0 0',
        '--_CardOverflow-margin': 'var(--CardOverflow-offset) var(--CardOverflow-offset) 0'
      },
      '&[data-last-child]': {
        '--AspectRatio-radius': `0 0 ${childRadius} ${childRadius}`,
        '--_CardOverflow-radius': '0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)',
        '--_CardOverflow-margin': '0 var(--CardOverflow-offset) var(--CardOverflow-offset)'
      },
      '&[data-last-child][data-first-child]': {
        '--AspectRatio-radius': childRadius,
        '--_CardOverflow-margin': 'var(--CardOverflow-offset)'
      },
      [`& > .${_buttonClasses.default.root}:only-child`]: {
        zIndex: 1,
        // prevent button from being covered Link overlay. This can be improved in the future with :has() selector
        width: 'calc(100% + -2 * var(--CardOverflow-offset))',
        '--Button-margin': '0 var(--CardOverflow-offset)',
        '--Button-radius': '0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)'
      }
    },
    [`.${_cardClasses.default.horizontal} &, .${_cardClasses.default.vertical} .${_cardClasses.default.horizontal} &`]: {
      '--_CardOverflow-flexDirection': 'row',
      '--AspectRatio-margin': 'calc(-1 * var(--Card-padding)) 0px',
      '--_CardOverflow-margin': 'var(--CardOverflow-offset) 0px',
      '--_CardOverflow-padding': 'var(--Card-padding) 0px',
      '&[data-first-child]': {
        '--AspectRatio-radius': `${childRadius} 0 0 ${childRadius}`,
        '--_CardOverflow-radius': 'var(--CardOverflow-radius) 0 0 var(--CardOverflow-radius)',
        '--_CardOverflow-margin': 'var(--CardOverflow-offset) 0px var(--CardOverflow-offset) var(--CardOverflow-offset)'
      },
      '&[data-last-child]': {
        '--AspectRatio-radius': `0 ${childRadius} ${childRadius} 0`,
        '--_CardOverflow-radius': '0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0',
        '--_CardOverflow-margin': 'var(--CardOverflow-offset) var(--CardOverflow-offset) var(--CardOverflow-offset) 0px'
      },
      '&[data-last-child][data-first-child]': {
        '--AspectRatio-radius': childRadius,
        '--_CardOverflow-margin': 'var(--CardOverflow-offset)'
      },
      [`& > .${_buttonClasses.default.root}:only-child`]: {
        height: 'calc(100% + -2 * var(--CardOverflow-offset))',
        '--Button-margin': 'var(--CardOverflow-offset) 0',
        '--Button-radius': '0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0'
      }
    },
    ...theme.variants[ownerState.variant]?.[ownerState.color]
  };
});
/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [CardOverflow API](https://mui.com/joy-ui/api/card-overflow/)
 */
const CardOverflow = /*#__PURE__*/React.forwardRef(function CardOverflow(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyCardOverflow'
  });
  const {
    className,
    component = 'div',
    children,
    color = 'neutral',
    variant = 'plain',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    color,
    variant
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
    elementType: CardOverflowRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? CardOverflow.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the CardOverflow if `src` is not set.
   * This can be an element, or just a string.
   */
  children: _propTypes.default.node,
  /**
   * @ignore
   */
  className: _propTypes.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
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
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;

// @ts-ignore
CardOverflow.muiName = 'CardOverflow';
var _default = exports.default = CardOverflow;