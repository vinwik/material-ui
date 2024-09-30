"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledButtonGroup = void 0;
var React = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _base = require("@mui/base");
var _Grid = require("@mui/system/Grid");
var _utils = require("@mui/utils");
var _styles = require("../styles");
var _styleUtils = require("../styles/styleUtils");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _buttonGroupClasses = require("./buttonGroupClasses");
var _ButtonGroupContext = _interopRequireDefault(require("./ButtonGroupContext"));
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _buttonClasses = _interopRequireDefault(require("../Button/buttonClasses"));
var _iconButtonClasses = _interopRequireDefault(require("../IconButton/iconButtonClasses"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _buttonGroupClasses.getButtonGroupUtilityClass, {});
};
const StyledButtonGroup = exports.StyledButtonGroup = (0, _styled.default)('div')(({
  theme,
  ownerState
}) => {
  const {
    borderRadius: radius
  } = (0, _styleUtils.resolveSxValue)({
    theme,
    ownerState
  }, ['borderRadius']);
  const firstChildRadius = ownerState.orientation === 'vertical' ? 'var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius)' : 'var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius)';
  const lastChildRadius = ownerState.orientation === 'vertical' ? 'var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius)' : 'var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius)';
  const margin = ownerState.orientation === 'vertical' ? 'calc(var(--ButtonGroup-separatorSize) * -1) 0 0 0' : '0 0 0 calc(var(--ButtonGroup-separatorSize) * -1)';
  const styles = {};
  (0, _Grid.unstable_traverseBreakpoints)(theme.breakpoints, ownerState.spacing, (appendStyle, value) => {
    if (value !== null) {
      appendStyle(styles, {
        // the buttons should be connected if the value is more than 0
        '--ButtonGroup-connected': value.toString().match(/^0(?!\.)/) ? '1' : '0',
        gap: typeof value === 'string' ? value : theme.spacing?.(value)
      });
    }
  });
  const outlinedStyle = theme.variants.outlined?.[ownerState.color];
  const outlinedDisabledStyle = theme.variants.outlinedDisabled?.[ownerState.color];
  const outlinedHoverStyle = theme.variants.outlinedHover?.[ownerState.color];
  return [{
    '--ButtonGroup-separatorSize': ownerState.variant === 'outlined' ? '1px' : 'calc(var(--ButtonGroup-connected) * 1px)',
    '--ButtonGroup-separatorColor': outlinedStyle?.borderColor,
    '--ButtonGroup-radius': theme.vars.radius.sm,
    '--Divider-inset': '0.5rem',
    '--unstable_childRadius': 'calc((1 - var(--ButtonGroup-connected)) * var(--ButtonGroup-radius) - var(--variant-borderWidth, 0px))',
    // for internal usage
    ...styles,
    display: 'flex',
    borderRadius: 'var(--ButtonGroup-radius)',
    flexDirection: ownerState.orientation === 'vertical' ? 'column' : 'row',
    // first Button or IconButton
    [`& > [data-first-child]`]: {
      '--Button-radius': firstChildRadius,
      '--IconButton-radius': firstChildRadius,
      ...(ownerState.orientation === 'horizontal' && {
        borderRight: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }),
      ...(ownerState.orientation === 'vertical' && {
        borderBottom: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      })
    },
    // middle Buttons or IconButtons
    [`& > :not([data-first-child]):not([data-last-child]):not(:only-child)`]: {
      '--Button-radius': 'var(--unstable_childRadius)',
      '--IconButton-radius': 'var(--unstable_childRadius)',
      borderRadius: 'var(--unstable_childRadius)',
      ...(ownerState.orientation === 'horizontal' && {
        borderLeft: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)',
        borderRight: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }),
      ...(ownerState.orientation === 'vertical' && {
        borderTop: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)',
        borderBottom: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      })
    },
    // last Button or IconButton
    [`& > [data-last-child]`]: {
      '--Button-radius': lastChildRadius,
      '--IconButton-radius': lastChildRadius,
      ...(ownerState.orientation === 'horizontal' && {
        borderLeft: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }),
      ...(ownerState.orientation === 'vertical' && {
        borderTop: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      })
    },
    // single Button or IconButton
    [`& > :only-child`]: {
      '--Button-radius': 'var(--ButtonGroup-radius)',
      '--IconButton-radius': 'var(--ButtonGroup-radius)'
    },
    [`& > :not([data-first-child]):not(:only-child)`]: {
      '--Button-margin': margin,
      '--IconButton-margin': margin
    },
    [`& .${_buttonClasses.default.root}, & .${_iconButtonClasses.default.root}`]: {
      '&:not(:disabled)': {
        zIndex: 1 // to make borders appear above disabled buttons.
      },
      '&:disabled': {
        '--ButtonGroup-separatorColor': outlinedDisabledStyle?.borderColor
      },
      ...(ownerState.variant === 'outlined' && {
        '&:hover': {
          '--ButtonGroup-separatorColor': outlinedHoverStyle?.borderColor
        }
      }),
      [`&:hover, ${theme.focus.selector}`]: {
        zIndex: 2 // to make borders appear above sibling.
      }
    },
    ...(ownerState.buttonFlex && {
      [`& > *:not(.${_iconButtonClasses.default.root})`]: {
        flex: ownerState.buttonFlex
      },
      [`& > :not(button) > .${_buttonClasses.default.root}`]: {
        width: '100%' // for button to fill its wrapper.
      }
    })
  }, radius !== undefined && {
    '--ButtonGroup-radius': radius
  }];
});
const ButtonGroupRoot = (0, _styled.default)(StyledButtonGroup, {
  name: 'JoyButtonGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 *
 * Demos:
 *
 * - [Button Group](https://mui.com/joy-ui/react-button-group/)
 *
 * API:
 *
 * - [ButtonGroup API](https://mui.com/joy-ui/api/button-group/)
 */
const ButtonGroup = /*#__PURE__*/React.forwardRef(function ButtonGroup(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyButtonGroup'
  });
  const {
    buttonFlex,
    className,
    component = 'div',
    disabled = false,
    size = 'md',
    color = 'neutral',
    variant = 'outlined',
    children,
    orientation = 'horizontal',
    slots = {},
    slotProps = {},
    spacing = 0,
    ...other
  } = props;
  const ownerState = {
    ...props,
    buttonFlex,
    color,
    component,
    orientation,
    spacing,
    size,
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
    elementType: ButtonGroupRoot,
    externalForwardedProps,
    additionalProps: {
      role: 'group'
    },
    ownerState
  });
  const buttonGroupContext = React.useMemo(() => ({
    variant,
    color,
    size,
    disabled
  }), [variant, color, size, disabled]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonGroupContext.default.Provider, {
      value: buttonGroupContext,
      children: React.Children.map(children, (child, index) => {
        if (! /*#__PURE__*/React.isValidElement(child)) {
          return child;
        }
        const extraProps = {};
        if ((0, _utils.unstable_isMuiElement)(child, ['Divider'])) {
          const childProps = child.props;
          extraProps.inset = childProps?.inset ?? 'context';
          const dividerOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
          extraProps.orientation = childProps?.orientation ?? dividerOrientation;
          extraProps.role = 'presentation';
          extraProps.component = 'span';
        }
        if (React.Children.count(children) > 1) {
          if (index === 0) {
            extraProps['data-first-child'] = '';
          }
          if (index === React.Children.count(children) - 1) {
            extraProps['data-last-child'] = '';
          }
        }
        return /*#__PURE__*/React.cloneElement(child, extraProps);
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? ButtonGroup.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The flex value of the button.
   * @example buttonFlex={1} will set flex: '1 1 auto' on each button (stretch the button to equally fill the available space).
   */
  buttonFlex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * Used to render icon or text elements inside the ButtonGroup if `src` is not set.
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
   * If `true`, all the buttons will be disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
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
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])), _propTypes.default.number, _propTypes.default.shape({
    lg: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    md: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    sm: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    xl: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    xs: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }), _propTypes.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = ButtonGroup;