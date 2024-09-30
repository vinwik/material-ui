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
var _composeClasses = require("@mui/base/composeClasses");
var _useButton = require("@mui/base/useButton");
var _utils = require("@mui/utils");
var _styles = require("../styles");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _variantColorInheritance = require("../styles/variantColorInheritance");
var _styleUtils = require("../styles/styleUtils");
var _chipClasses = _interopRequireWildcard(require("./chipClasses"));
var _ChipContext = _interopRequireDefault(require("./ChipContext"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    disabled,
    size,
    color,
    clickable,
    variant,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, clickable && 'clickable'],
    action: ['action', disabled && 'disabled', focusVisible && 'focusVisible'],
    label: ['label', size && `label${(0, _utils.unstable_capitalize)(size)}`],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _chipClasses.getChipUtilityClass, {});
};
const ChipRoot = (0, _styled.default)('div', {
  name: 'JoyChip',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[ownerState.variant]?.[ownerState.color];
  const {
    borderRadius
  } = (0, _styleUtils.resolveSxValue)({
    theme,
    ownerState
  }, ['borderRadius']);
  return [{
    // for controlling chip delete margin offset
    '--Chip-decoratorChildOffset': 'min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))',
    '--Chip-decoratorChildRadius': 'max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))',
    '--Chip-deleteRadius': 'var(--Chip-decoratorChildRadius)',
    '--Chip-deleteSize': 'var(--Chip-decoratorChildHeight)',
    '--Avatar-radius': 'var(--Chip-decoratorChildRadius)',
    '--Avatar-size': 'var(--Chip-decoratorChildHeight)',
    '--Icon-margin': 'initial',
    // reset the icon's margin.
    '--Icon-color': 'currentColor',
    '--unstable_actionRadius': 'var(--_Chip-radius)',
    // to be used with Radio or Checkbox
    ...(ownerState.size === 'sm' && {
      '--Chip-paddingInline': '0.375rem',
      '--Chip-decoratorChildHeight': 'calc(var(--_Chip-minHeight) - 2 * var(--variant-borderWidth))',
      '--Icon-fontSize': theme.vars.fontSize.sm,
      '--_Chip-minHeight': 'var(--Chip-minHeight, 1.25rem)',
      // 20px
      gap: '3px'
    }),
    ...(ownerState.size === 'md' && {
      '--Chip-paddingInline': '0.5rem',
      '--Chip-decoratorChildHeight': 'calc(var(--_Chip-minHeight) - 0.25rem - 2 * var(--variant-borderWidth))',
      '--Icon-fontSize': theme.vars.fontSize.md,
      '--_Chip-minHeight': 'var(--Chip-minHeight, 1.5rem)',
      // 26px
      gap: '0.25rem'
    }),
    ...(ownerState.size === 'lg' && {
      '--Chip-paddingInline': '0.75rem',
      '--Chip-decoratorChildHeight': 'calc(var(--_Chip-minHeight) - 0.375rem - 2 * var(--variant-borderWidth))',
      '--Icon-fontSize': theme.vars.fontSize.lg,
      '--_Chip-minHeight': 'var(--Chip-minHeight, 1.75rem)',
      // 28px
      gap: '0.375rem'
    }),
    '--_Chip-radius': 'var(--Chip-radius, 1.5rem)',
    '--_Chip-paddingBlock': 'max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)',
    minHeight: 'var(--_Chip-minHeight)',
    maxWidth: 'max-content',
    // to prevent Chip from stretching to full width when used with flexbox
    paddingInline: 'var(--Chip-paddingInline)',
    borderRadius: 'var(--_Chip-radius)',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    ...theme.typography[`body-${{
      sm: 'xs',
      md: 'sm',
      lg: 'md'
    }[ownerState.size]}`],
    fontWeight: theme.vars.fontWeight.md,
    [`&.${_chipClasses.default.disabled}`]: {
      color: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]?.color
    }
  }, ...(!ownerState.clickable ? [{
    backgroundColor: theme.vars.palette.background.surface,
    ...variantStyle,
    [`&.${_chipClasses.default.disabled}`]: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]
  }] : [{
    '--variant-borderWidth': '0px',
    color: variantStyle?.color
  }]), borderRadius !== undefined && {
    '--_Chip-radius': borderRadius
  }];
});
const ChipLabel = (0, _styled.default)('span', {
  name: 'JoyChip',
  slot: 'Label',
  overridesResolver: (props, styles) => styles.label
})(({
  ownerState
}) => ({
  display: 'inline-block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  order: 1,
  minInlineSize: 0,
  flexGrow: 1,
  ...(ownerState.clickable && {
    zIndex: 1,
    pointerEvents: 'none'
  })
}));
const ChipAction = (0, _styled.default)('button', {
  name: 'JoyChip',
  slot: 'Action',
  overridesResolver: (props, styles) => styles.action
})(({
  theme,
  ownerState
}) => [{
  '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
  position: 'absolute',
  zIndex: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  // To fix Firefox issue (https://github.com/mui/material-ui/issues/36877)
  border: 'none',
  cursor: 'pointer',
  padding: 'initial',
  margin: 'initial',
  backgroundColor: 'initial',
  textDecoration: 'none',
  borderRadius: 'inherit',
  [theme.focus.selector]: theme.focus.default
}, {
  backgroundColor: theme.vars.palette.background.surface,
  ...theme.variants[ownerState.variant]?.[ownerState.color]
}, {
  '&:hover': {
    '@media (hover: hover)': theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color]
  }
}, {
  '&:active': theme.variants[`${ownerState.variant}Active`]?.[ownerState.color]
}, {
  [`&.${_chipClasses.default.disabled}`]: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color]
}]);
const ChipStartDecorator = (0, _styled.default)('span', {
  name: 'JoyChip',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})({
  '--Avatar-marginInlineStart': 'calc(var(--Chip-decoratorChildOffset) * -1)',
  '--IconButton-margin': '0 calc(-1 * var(--Chip-paddingInline) / 3) 0 calc(var(--Chip-decoratorChildOffset) * -1)',
  '--Icon-margin': '0 0 0 calc(var(--Chip-paddingInline) / -4)',
  display: 'inherit',
  // set zIndex to 1 with order to stay on top of other controls, for example Checkbox, Radio
  order: 0,
  zIndex: 1,
  pointerEvents: 'none'
});
const ChipEndDecorator = (0, _styled.default)('span', {
  name: 'JoyChip',
  slot: 'EndDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})({
  '--IconButton-margin': '0 calc(var(--Chip-decoratorChildOffset) * -1) 0 calc(-1 * var(--Chip-paddingInline) / 3)',
  '--Icon-margin': '0 calc(var(--Chip-paddingInline) / -4) 0 0',
  display: 'inherit',
  // set zIndex to 1 with order to stay on top of other controls, for example Checkbox, Radio
  order: 2,
  zIndex: 1,
  pointerEvents: 'none'
});

/**
 * Chips represent complex entities in small blocks, such as a contact.
 *
 * Demos:
 *
 * - [Chip](https://mui.com/joy-ui/react-chip/)
 *
 * API:
 *
 * - [Chip API](https://mui.com/joy-ui/api/chip/)
 */
const Chip = /*#__PURE__*/React.forwardRef(function Chip(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyChip'
  });
  const {
    children,
    className,
    color = 'neutral',
    onClick,
    disabled = false,
    size = 'md',
    variant = 'soft',
    startDecorator,
    endDecorator,
    component,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const clickable = !!onClick || !!slotProps.action;
  const ownerState = {
    ...props,
    disabled,
    size,
    color,
    variant,
    clickable,
    focusVisible: false
  };
  const resolvedActionProps = typeof slotProps.action === 'function' ? slotProps.action(ownerState) : slotProps.action;
  const actionRef = React.useRef(null);
  const {
    focusVisible,
    getRootProps
  } = (0, _useButton.useButton)({
    ...resolvedActionProps,
    disabled,
    rootRef: actionRef
  });
  ownerState.focusVisible = focusVisible;
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
    elementType: ChipRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotLabel, labelProps] = (0, _useSlot.default)('label', {
    className: classes.label,
    elementType: ChipLabel,
    externalForwardedProps,
    ownerState
  });

  // @ts-ignore internal logic.
  const id = (0, _utils.unstable_useId)(labelProps.id);
  const [SlotAction, actionProps] = (0, _useSlot.default)('action', {
    className: classes.action,
    elementType: ChipAction,
    externalForwardedProps,
    ownerState,
    getSlotProps: getRootProps,
    additionalProps: {
      'aria-labelledby': id,
      as: resolvedActionProps?.component,
      onClick
    }
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    className: classes.startDecorator,
    elementType: ChipStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    className: classes.endDecorator,
    elementType: ChipEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const chipContextValue = React.useMemo(() => ({
    disabled
  }), [disabled]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChipContext.default.Provider, {
    value: chipContextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_variantColorInheritance.VariantColorProvider, {
      variant: variant,
      color: color,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
        ...rootProps,
        children: [clickable && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotAction, {
          ...actionProps
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotLabel, {
          ...labelProps,
          id: id,
          children: children
        }), startDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, {
          ...startDecoratorProps,
          children: startDecorator
        }), endDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, {
          ...endDecoratorProps,
          children: endDecorator
        })]
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? Chip.propTypes /* remove-proptypes */ = {
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
   * @default 'neutral'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: _propTypes.default.node,
  /**
   * Element action click handler.
   */
  onClick: _propTypes.default.func,
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
    action: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    endDecorator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    label: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
    startDecorator: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    action: _propTypes.default.elementType,
    endDecorator: _propTypes.default.elementType,
    label: _propTypes.default.elementType,
    root: _propTypes.default.elementType,
    startDecorator: _propTypes.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: _propTypes.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = Chip;