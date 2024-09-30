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
var _TextareaAutosize = require("@mui/base/TextareaAutosize");
var _styles = require("../styles");
var _useSlot = _interopRequireDefault(require("../utils/useSlot"));
var _textareaClasses = _interopRequireWildcard(require("./textareaClasses"));
var _useForwardedInput = _interopRequireDefault(require("../Input/useForwardedInput"));
var _jsxRuntime = require("react/jsx-runtime");
const useUtilityClasses = ownerState => {
  const {
    disabled,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`],
    textarea: ['textarea'],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, _textareaClasses.getTextareaUtilityClass, {});
};
const TextareaRoot = (0, _styles.styled)('div', {
  name: 'JoyTextarea',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const variantStyle = theme.variants[`${ownerState.variant}`]?.[ownerState.color];
  return [{
    '--Textarea-radius': theme.vars.radius.sm,
    '--Textarea-gap': '0.5rem',
    '--Textarea-placeholderColor': 'inherit',
    '--Textarea-placeholderOpacity': 0.64,
    '--Textarea-decoratorColor': theme.vars.palette.text.icon,
    '--Textarea-focused': '0',
    '--Textarea-focusedThickness': theme.vars.focus.thickness,
    '--Textarea-focusedHighlight': theme.vars.palette[ownerState.color === 'neutral' ? 'primary' : ownerState.color]?.[500],
    '&:not([data-inverted-colors="false"])': {
      ...(ownerState.instanceColor && {
        '--_Textarea-focusedHighlight': theme.vars.palette[ownerState.instanceColor === 'neutral' ? 'primary' : ownerState.instanceColor]?.[500]
      }),
      '--Textarea-focusedHighlight': `var(--_Textarea-focusedHighlight, ${theme.vars.palette.focusVisible})`
    },
    ...(ownerState.size === 'sm' && {
      '--Textarea-minHeight': '2rem',
      '--Textarea-paddingBlock': 'calc(0.375rem - 0.5px - var(--variant-borderWidth, 0px))',
      // to match Input because <textarea> does not center the text at the middle like <input>
      '--Textarea-paddingInline': '0.5rem',
      '--Textarea-decoratorChildHeight': 'min(1.5rem, var(--Textarea-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl
    }),
    ...(ownerState.size === 'md' && {
      '--Textarea-minHeight': '2.25rem',
      '--Textarea-paddingBlock': 'calc(0.375rem - var(--variant-borderWidth, 0px))',
      '--Textarea-paddingInline': '0.75rem',
      '--Textarea-decoratorChildHeight': 'min(1.75rem, var(--Textarea-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl2
    }),
    ...(ownerState.size === 'lg' && {
      '--Textarea-minHeight': '3rem',
      '--Textarea-paddingBlock': 'calc(0.75rem - var(--variant-borderWidth, 0px))',
      '--Textarea-paddingInline': '1rem',
      '--Textarea-gap': '0.75rem',
      '--Textarea-decoratorChildHeight': 'min(2.375rem, var(--Textarea-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl2
    }),
    // variables for controlling child components
    '--_Textarea-paddingBlock': 'max((var(--Textarea-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Textarea-decoratorChildHeight)) / 2, 0px)',
    '--Textarea-decoratorChildRadius': 'max(var(--Textarea-radius) - var(--variant-borderWidth, 0px) - var(--_Textarea-paddingBlock), min(var(--_Textarea-paddingBlock) + var(--variant-borderWidth, 0px), var(--Textarea-radius) / 2))',
    '--Button-minHeight': 'var(--Textarea-decoratorChildHeight)',
    '--Button-paddingBlock': '0px',
    // to ensure that the height of the button is equal to --Button-minHeight
    '--IconButton-size': 'var(--Textarea-decoratorChildHeight)',
    '--Button-radius': 'var(--Textarea-decoratorChildRadius)',
    '--IconButton-radius': 'var(--Textarea-decoratorChildRadius)',
    boxSizing: 'border-box',
    ...(ownerState.variant !== 'plain' && {
      boxShadow: theme.shadow.xs
    }),
    minWidth: 0,
    minHeight: 'var(--Textarea-minHeight)',
    cursor: 'text',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingInlineStart: `var(--Textarea-paddingInline)`,
    // the paddingInlineEnd is added to the textarea. It looks better when the scrollbar appears.
    paddingBlock: 'var(--Textarea-paddingBlock)',
    borderRadius: 'var(--Textarea-radius)',
    ...theme.typography[`body-${ownerState.size}`],
    ...variantStyle,
    backgroundColor: variantStyle?.backgroundColor ?? theme.vars.palette.background.surface,
    '&::before': {
      boxSizing: 'border-box',
      content: '""',
      display: 'block',
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: 'inherit',
      margin: 'calc(var(--variant-borderWidth, 0px) * -1)',
      // for outlined variant
      boxShadow: `var(--Textarea-focusedInset, inset) 0 0 0 calc(var(--Textarea-focused) * var(--Textarea-focusedThickness)) var(--Textarea-focusedHighlight)`
    }
  }, {
    '&:hover': {
      ...theme.variants[`${ownerState.variant}Hover`]?.[ownerState.color],
      backgroundColor: null,
      // it is not common to change background on hover for Textarea
      cursor: 'text'
    },
    [`&.${_textareaClasses.default.disabled}`]: theme.variants[`${ownerState.variant}Disabled`]?.[ownerState.color],
    '&:focus-within::before': {
      '--Textarea-focused': '1'
    }
  }];
});
const TextareaInput = (0, _styles.styled)(_TextareaAutosize.TextareaAutosize, {
  name: 'JoyTextarea',
  slot: 'Textarea',
  overridesResolver: (props, styles) => styles.textarea
})({
  resize: 'none',
  border: 'none',
  // remove the native textarea width
  minWidth: 0,
  // remove the native textarea width
  outline: 0,
  // remove the native textarea outline
  padding: 0,
  // remove the native textarea padding
  paddingInlineEnd: `var(--Textarea-paddingInline)`,
  flex: 'auto',
  alignSelf: 'stretch',
  color: 'inherit',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  '&::-webkit-input-placeholder': {
    color: 'var(--Textarea-placeholderColor)',
    opacity: 'var(--Textarea-placeholderOpacity)'
  },
  '&::-moz-placeholder': {
    // Firefox 19+
    color: 'var(--Textarea-placeholderColor)',
    opacity: 'var(--Textarea-placeholderOpacity)'
  },
  '&:-ms-input-placeholder': {
    // IE11
    color: 'var(--Textarea-placeholderColor)',
    opacity: 'var(--Textarea-placeholderOpacity)'
  },
  '&::-ms-input-placeholder': {
    // Edge
    color: 'var(--Textarea-placeholderColor)',
    opacity: 'var(--Textarea-placeholderOpacity)'
  }
});
const TextareaStartDecorator = (0, _styles.styled)('div', {
  name: 'JoyTextarea',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})({
  display: 'flex',
  marginInlineStart: 'calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))',
  marginInlineEnd: 'var(--Textarea-paddingBlock)',
  marginBlockEnd: 'var(--Textarea-gap)',
  color: 'var(--Textarea-decoratorColor)',
  cursor: 'initial'
});
const TextareaEndDecorator = (0, _styles.styled)('div', {
  name: 'JoyTextarea',
  slot: 'EndDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})({
  display: 'flex',
  marginInlineStart: 'calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))',
  marginInlineEnd: 'var(--Textarea-paddingBlock)',
  marginBlockStart: 'var(--Textarea-gap)',
  color: 'var(--Textarea-decoratorColor)',
  cursor: 'initial'
});
/**
 *
 * Demos:
 *
 * - [Textarea](https://mui.com/joy-ui/react-textarea/)
 *
 * API:
 *
 * - [Textarea API](https://mui.com/joy-ui/api/textarea/)
 */
const Textarea = /*#__PURE__*/React.forwardRef(function Textarea(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyTextarea'
  });
  const {
    propsToForward,
    rootStateClasses,
    inputStateClasses,
    getRootProps,
    getInputProps,
    formControl,
    focused,
    error: errorProp = false,
    disabled: disabledProp = false,
    size: sizeProp = 'md',
    color: colorProp = 'neutral',
    variant = 'outlined',
    startDecorator,
    endDecorator,
    minRows,
    maxRows,
    component,
    slots = {},
    slotProps = {},
    ...other
  } = (0, _useForwardedInput.default)(props, _textareaClasses.default);
  if (process.env.NODE_ENV !== 'production') {
    const registerEffect = formControl?.registerEffect;
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return undefined;
    }, [registerEffect]);
  }
  const disabled = inProps.disabled ?? formControl?.disabled ?? disabledProp;
  const error = inProps.error ?? formControl?.error ?? errorProp;
  const size = inProps.size ?? formControl?.size ?? sizeProp;
  const color = inProps.color ?? (error ? 'danger' : formControl?.color ?? colorProp);
  const ownerState = {
    instanceColor: error ? 'danger' : inProps.color,
    ...props,
    color,
    disabled,
    error,
    focused,
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
    className: [classes.root, rootStateClasses],
    elementType: TextareaRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState
  });
  const [SlotTextarea, textareaProps] = (0, _useSlot.default)('textarea', {
    additionalProps: {
      id: formControl?.htmlFor,
      'aria-describedby': formControl?.['aria-describedby']
    },
    className: [classes.textarea, inputStateClasses],
    elementType: TextareaInput,
    internalForwardedProps: {
      ...propsToForward,
      minRows,
      maxRows
    },
    externalForwardedProps,
    getSlotProps: getInputProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    className: classes.startDecorator,
    elementType: TextareaStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    className: classes.endDecorator,
    elementType: TextareaEndDecorator,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, {
    ...rootProps,
    children: [startDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, {
      ...startDecoratorProps,
      children: startDecorator
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotTextarea, {
      ...textareaProps
    }), endDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, {
      ...endDecoratorProps,
      children: endDecorator
    })]
  });
});
process.env.NODE_ENV !== "production" ? Textarea.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: _propTypes.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['danger', 'neutral', 'primary', 'success', 'warning']), _propTypes.default.string]),
  /**
   * @ignore
   */
  disabled: _propTypes.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endDecorator: _propTypes.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   * @default false
   */
  error: _propTypes.default.bool,
  /**
   * Maximum number of rows to display.
   */
  maxRows: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * The size of the component.
   * @default 'md'
   */
  size: _propTypes.default /* @typescript-to-proptypes-ignore */.oneOfType([_propTypes.default.oneOf(['sm', 'md', 'lg']), _propTypes.default.string]),
  /**
   * Leading adornment for this input.
   */
  startDecorator: _propTypes.default.node,
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
var _default = exports.default = Textarea;