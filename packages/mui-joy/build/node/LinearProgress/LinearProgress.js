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
var _clsx = _interopRequireDefault(require("clsx"));
var _utils = require("@mui/utils");
var _base = require("@mui/base");
var _system = require("@mui/system");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _useThemeProps = _interopRequireDefault(require("../styles/useThemeProps"));
var _linearProgressClasses = require("./linearProgressClasses");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _styleUtils = require("../styles/styleUtils");
var _jsxRuntime = require("react/jsx-runtime");
// TODO: replace `left` with `inset-inline-start` in the future to work with writing-mode. https://caniuse.com/?search=inset-inline-start
//       replace `width` with `inline-size`, not sure why inline-size does not work with animation in Safari.
const progressKeyframe = (0, _system.keyframes)`
  0% {
    left: var(--_LinearProgress-progressInset);
    width: var(--LinearProgress-progressMinWidth);
  }

  25% {
    width: var(--LinearProgress-progressMaxWidth);
  }

  50% {
    left: var(--_LinearProgress-progressLeft);
    width: var(--LinearProgress-progressMinWidth);
  }

  75% {
    width: var(--LinearProgress-progressMaxWidth);
  }

  100% {
    left: var(--_LinearProgress-progressInset);
    width: var(--LinearProgress-progressMinWidth);
  }
`;
const useUtilityClasses = ownerState => {
  const {
    determinate,
    color,
    variant,
    size
  } = ownerState;
  const slots = {
    root: ['root', determinate && 'determinate', color && `color${(0, _utils.unstable_capitalize)(color)}`, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _linearProgressClasses.getLinearProgressUtilityClass, {});
};
const LinearProgressRoot = (0, _styled.default)('div', {
  name: 'JoyLinearProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => ({
  // public variables
  '--LinearProgress-radius': 'var(--LinearProgress-thickness)',
  '--LinearProgress-progressThickness': 'var(--LinearProgress-thickness)',
  '--LinearProgress-progressRadius': 'max(var(--LinearProgress-radius) - var(--_LinearProgress-padding), min(var(--_LinearProgress-padding) / 2, var(--LinearProgress-radius) / 2))',
  ...(ownerState.size === 'sm' && {
    '--LinearProgress-thickness': '4px'
  }),
  ...(ownerState.size === 'md' && {
    '--LinearProgress-thickness': '6px'
  }),
  ...(ownerState.size === 'lg' && {
    '--LinearProgress-thickness': '8px'
  }),
  ...(ownerState.thickness && {
    '--LinearProgress-thickness': `${ownerState.thickness}px`
  }),
  ...(!ownerState.determinate && {
    '--LinearProgress-progressMinWidth': 'calc(var(--LinearProgress-percent) * 1% / 2)',
    '--LinearProgress-progressMaxWidth': 'calc(var(--LinearProgress-percent) * 1%)',
    '--_LinearProgress-progressLeft': 'calc(100% - var(--LinearProgress-progressMinWidth) - var(--_LinearProgress-progressInset))',
    '--_LinearProgress-progressInset': 'calc(var(--LinearProgress-thickness) / 2 - var(--LinearProgress-progressThickness) / 2)'
  }),
  minBlockSize: 'var(--LinearProgress-thickness)',
  boxSizing: 'border-box',
  borderRadius: 'var(--LinearProgress-radius)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  padding: 'var(--_LinearProgress-padding)',
  position: 'relative',
  ...theme.variants[ownerState.variant]?.[ownerState.color],
  '--_LinearProgress-padding': 'max((var(--LinearProgress-thickness) - 2 * var(--variant-borderWidth, 0px) - var(--LinearProgress-progressThickness)) / 2, 0px)',
  '&::before': {
    content: '""',
    display: 'block',
    boxSizing: 'inherit',
    blockSize: 'var(--LinearProgress-progressThickness)',
    borderRadius: 'var(--LinearProgress-progressRadius)',
    backgroundColor: 'currentColor',
    color: 'inherit',
    position: 'absolute' // required to make `left` animation works.
  },
  ...(ownerState.variant === 'soft' && {
    backgroundColor: theme.variants.soft.neutral.backgroundColor,
    color: theme.variants.solid?.[ownerState.color].backgroundColor
  }),
  ...(ownerState.variant === 'solid' && {
    backgroundColor: theme.variants.softHover?.[ownerState.color].backgroundColor,
    color: theme.variants.solid?.[ownerState.color].backgroundColor
  })
}), ({
  ownerState
}) => ownerState.determinate ? {
  '&::before': {
    left: 'var(--_LinearProgress-padding)',
    inlineSize: 'calc(var(--LinearProgress-percent) * 1% - 2 * var(--_LinearProgress-padding))'
  }
} : (0, _system.css)`
          &::before {
            animation: ${progressKeyframe}
              var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running);
          }
        `, ({
  ownerState,
  theme
}) => {
  const {
    borderRadius,
    height
  } = (0, _styleUtils.resolveSxValue)({
    theme,
    ownerState
  }, ['borderRadius', 'height']);
  return {
    ...(borderRadius !== undefined && {
      '--LinearProgress-radius': borderRadius
    }),
    ...(height !== undefined && {
      '--LinearProgress-thickness': height
    })
  };
});

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 *
 * Demos:
 *
 * - [Linear Progress](https://mui.com/joy-ui/react-linear-progress/)
 *
 * API:
 *
 * - [LinearProgress API](https://mui.com/joy-ui/api/linear-progress/)
 */
const LinearProgress = /*#__PURE__*/React.forwardRef(function LinearProgress(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'JoyLinearProgress'
  });
  const {
    children,
    className,
    component,
    color = 'primary',
    size = 'md',
    variant = 'soft',
    thickness,
    determinate = false,
    value = determinate ? 0 : 25,
    // `25` is the 1/4 of the bar.
    style,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    color,
    size,
    variant,
    thickness,
    value,
    determinate,
    instanceSize: inProps.size
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
    elementType: LinearProgressRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role: 'progressbar',
      style: {
        // Setting this CSS variable via inline-style
        // prevents the generation of new CSS every time
        // `value` prop updates
        ...{
          '--LinearProgress-percent': value
        },
        ...style
      },
      ...(typeof value === 'number' && determinate && {
        'aria-valuenow': Math.round(value)
      })
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, {
    ...rootProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? LinearProgress.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: _propTypes.default.node,
  /**
   * @ignore
   */
  className: _propTypes.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes.default.elementType,
  /**
   * The boolean to select a variant.
   * Use indeterminate when there is no progress value.
   * @default false
   */
  determinate: _propTypes.default.bool,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
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
   * @ignore
   */
  style: _propTypes.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * The thickness of the bar.
   */
  thickness: _propTypes.default.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   *
   * @default determinate ? 0 : 25
   */
  value: _propTypes.default.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['outlined', 'plain', 'soft', 'solid']), _propTypes.default.string])
} : void 0;
var _default = exports.default = LinearProgress;