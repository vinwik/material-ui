"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(BadgeUnstyled, {
  slots: {
    root: Root,
    badge: CustomBadge
  },
  slotProps: {
    root: {
      className: 'root'
    },
    badge: {
      'data-testid': 'badge'
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(InputUnstyled, {
  slots: {
    input: CustomInput,
    root: CustomRoot
  },
  slotProps: {
    root: {
      className: 'root'
    },
    input: {
      className: 'input'
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Badge, {
  components: {
    Root,
    Badge: CustomBadge
  },
  componentsProps: {
    root: {
      className: 'root'
    },
    badge: {
      'data-testid': 'badge'
    }
  }
});