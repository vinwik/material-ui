"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _base = require("@mui/base");
var _styles = require("../styles");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _accordionSummaryClasses = _interopRequireWildcard(require("./accordionSummaryClasses"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _AccordionContext = _interopRequireDefault(require("../Accordion/AccordionContext"));
var _ListItem = require("../ListItem/ListItem");
var _ListItemButton = require("../ListItemButton/ListItemButton");
var _KeyboardArrowDown2 = _interopRequireDefault(require("../internal/svg-icons/KeyboardArrowDown"));
var _jsxRuntime = require("react/jsx-runtime");
var _KeyboardArrowDown;
const useUtilityClasses = ownerState => {
  const {
    disabled,
    expanded
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', expanded && 'expanded'],
    button: ['button', disabled && 'disabled', expanded && 'expanded'],
    indicator: ['indicator', disabled && 'disabled', expanded && 'expanded']
  };
  return (0, _base.unstable_composeClasses)(slots, _accordionSummaryClasses.getAccordionSummaryUtilityClass, {});
};
const AccordionSummaryRoot = (0, _styled.default)(_ListItem.StyledListItem, {
  name: 'JoyAccordionSummary',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  fontWeight: theme.vars.fontWeight.md,
  gap: 'calc(var(--ListItem-paddingX, 0.75rem) + 0.25rem)',
  [`&.${_accordionSummaryClasses.default.expanded}`]: {
    '--Icon-color': 'currentColor'
  }
}));
const AccordionSummaryButton = (0, _styled.default)(_ListItemButton.StyledListItemButton, {
  name: 'JoyAccordionSummary',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})({
  gap: 'inherit',
  fontWeight: 'inherit',
  justifyContent: 'space-between',
  font: 'inherit',
  '&:focus-visible': {
    zIndex: 1 // to make the focus ring appear above the next Accordion.
  },
  [`.${_accordionSummaryClasses.default.root} &`]: {
    '--unstable_ListItem-flex': '1 0 0%' // grow to fill the available space of ListItem
  }
});
const AccordionSummaryIndicator = (0, _styled.default)('span', {
  name: 'JoyAccordionSummary',
  slot: 'Indicator',
  overridesResolver: (props, styles) => styles.indicator
})({
  display: 'inline-flex',
  [`&.${_accordionSummaryClasses.default.expanded}`]: {
    transform: 'rotate(180deg)'
  }
});

/**
 *
 * Demos:
 *
 * - [Accordion](https://mui.com/joy-ui/react-accordion/)
 *
 * API:
 *
 * - [AccordionSummary API](https://mui.com/joy-ui/api/accordion-summary/)
 */
const AccordionSummary = /*#__PURE__*/React.forwardRef(function AccordionSummary(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyAccordionSummary'
  });
  const {
    component = 'div',
    color = 'neutral',
    children,
    indicator = _KeyboardArrowDown || (_KeyboardArrowDown = /*#__PURE__*/(0, _jsxRuntime.jsx)(_KeyboardArrowDown2.default, {})),
    variant = 'plain',
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    accordionId,
    disabled = false,
    expanded = false,
    toggle
  } = React.useContext(_AccordionContext.default);
  const externalForwardedProps = {
    ...other,
    component,
    slots,
    slotProps
  };
  const ownerState = {
    ...props,
    component,
    color,
    disabled,
    expanded,
    variant
  };
  const handleClick = event => {
    if (toggle) {
      toggle(event);
    }
    if (typeof slotProps.button === 'function') {
      slotProps.button(ownerState)?.onClick?.(event);
    } else {
      slotProps.button?.onClick?.(event);
    }
  };
  const classes = useUtilityClasses(ownerState);
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: classes.root,
    elementType: AccordionSummaryRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotButton, buttonProps] = (0, _useSlot.default)('button', {
    ref,
    className: classes.button,
    elementType: AccordionSummaryButton,
    externalForwardedProps,
    additionalProps: {
      component: 'button',
      id: `${accordionId}-summary`,
      'aria-expanded': expanded ? 'true' : 'false',
      'aria-controls': `${accordionId}-details`,
      disabled,
      type: 'button',
      onClick: handleClick
    },
    ownerState
  });
  const [SlotIndicator, indicatorProps] = (0, _useSlot.default)('indicator', {
    ref,
    className: classes.indicator,
    elementType: AccordionSummaryIndicator,
    externalForwardedProps,
    ownerState
  });
  return (
    /*#__PURE__*/
    // Root and Button slots are required based on [WAI-ARIA Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/)
    (0, _jsxRuntime.jsx)(SlotRoot, {
      ...rootProps,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotButton, {
        ...buttonProps,
        children: [children, indicator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotIndicator, {
          ...indicatorProps,
          children: indicator
        })]
      })
    })
  );
});
process.env.NODE_ENV !== "production" ? AccordionSummary.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the AccordionSummary if `src` is not set.
   * This can be an element, or just a string.
   */
  children: _propTypes.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: _propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * The indicator element to display.
   * @default <KeyboardArrowDown />
   */
  indicator: _propTypes.default.node,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    button: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    indicator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    button: _propTypes.default.elementType,
    indicator: _propTypes.default.elementType,
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
  variant: _propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid'])
} : void 0;
var _default = exports.default = AccordionSummary;