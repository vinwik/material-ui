"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useButton = useButton;
var React = _interopRequireWildcard(require("react"));
var _utils = require("@mui/utils");
var _extractEventHandlers = require("../utils/extractEventHandlers");
var _useRootElementName = require("../utils/useRootElementName");
/**
 *
 * Demos:
 *
 * - [Button](https://mui.com/base-ui/react-button/#hook)
 *
 * API:
 *
 * - [useButton API](https://mui.com/base-ui/react-button/hooks-api/#use-button)
 */
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    rootRef: externalRef,
    tabIndex,
    to,
    type,
    rootElementName: rootElementNameProp
  } = parameters;
  const buttonRef = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }
  const [rootElementName, updateRootElementName] = (0, _useRootElementName.useRootElementName)({
    rootElementName: rootElementNameProp ?? (href || to ? 'a' : undefined),
    componentName: 'Button'
  });
  const createHandleMouseLeave = otherHandlers => event => {
    if (focusVisible) {
      event.preventDefault();
    }
    otherHandlers.onMouseLeave?.(event);
  };
  const createHandleBlur = otherHandlers => event => {
    if (!(0, _utils.unstable_isFocusVisible)(event.target)) {
      setFocusVisible(false);
    }
    otherHandlers.onBlur?.(event);
  };
  const createHandleFocus = otherHandlers => event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if ((0, _utils.unstable_isFocusVisible)(event.target)) {
      setFocusVisible(true);
      otherHandlers.onFocusVisible?.(event);
    }
    otherHandlers.onFocus?.(event);
  };
  const isNativeButton = () => {
    const button = buttonRef.current;
    return rootElementName === 'BUTTON' || rootElementName === 'INPUT' && ['button', 'submit', 'reset'].includes(button?.type) || rootElementName === 'A' && button?.href;
  };
  const createHandleClick = otherHandlers => event => {
    if (!disabled) {
      otherHandlers.onClick?.(event);
    }
  };
  const createHandleMouseDown = otherHandlers => event => {
    if (!disabled) {
      setActive(true);
      document.addEventListener('mouseup', () => {
        setActive(false);
      }, {
        once: true
      });
    }
    otherHandlers.onMouseDown?.(event);
  };
  const createHandleKeyDown = otherHandlers => event => {
    otherHandlers.onKeyDown?.(event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === ' ') {
      event.preventDefault();
    }
    if (event.target === event.currentTarget && event.key === ' ' && !disabled) {
      setActive(true);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && !isNativeButton() && event.key === 'Enter' && !disabled) {
      otherHandlers.onClick?.(event);
      event.preventDefault();
    }
  };
  const createHandleKeyUp = otherHandlers => event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0

    if (event.target === event.currentTarget) {
      setActive(false);
    }
    otherHandlers.onKeyUp?.(event);

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === ' ' && !event.defaultMuiPrevented) {
      otherHandlers.onClick?.(event);
    }
  };
  const handleRef = (0, _utils.unstable_useForkRef)(updateRootElementName, externalRef, buttonRef);
  const buttonProps = {};
  if (tabIndex !== undefined) {
    buttonProps.tabIndex = tabIndex;
  }
  if (rootElementName === 'BUTTON') {
    buttonProps.type = type ?? 'button';
    if (focusableWhenDisabled) {
      buttonProps['aria-disabled'] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (rootElementName === 'INPUT') {
    if (type && ['button', 'submit', 'reset'].includes(type)) {
      if (focusableWhenDisabled) {
        buttonProps['aria-disabled'] = disabled;
      } else {
        buttonProps.disabled = disabled;
      }
    }
  } else if (rootElementName !== '') {
    if (!href && !to) {
      buttonProps.role = 'button';
      buttonProps.tabIndex = tabIndex ?? 0;
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex ?? 0 : -1;
    }
  }
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = {
      ...(0, _extractEventHandlers.extractEventHandlers)(parameters),
      ...(0, _extractEventHandlers.extractEventHandlers)(externalProps)
    };
    const props = {
      type,
      ...externalEventHandlers,
      ...buttonProps,
      ...externalProps,
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      ref: handleRef
    };

    // onFocusVisible can be present on the props or parameters,
    // but it's not a valid React event handler so it must not be forwarded to the inner component.
    // If present, it will be handled by the focus handler.
    delete props.onFocusVisible;
    return props;
  };
  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    active,
    rootRef: handleRef
  };
}