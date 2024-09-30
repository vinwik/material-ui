"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _AvatarGroup = _interopRequireDefault(require("@mui/material/AvatarGroup"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(_AvatarGroup.default, {
  slotProps: {
    surplus: {
      color: "red"
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AvatarGroup, {
  slotProps: {
    surplus: {
      color: "red"
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AvatarGroup, {
  slotProps: {
    surplus: {
      ...{
        color: "red"
      },
      ...{
        color: "blue"
      }
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AvatarGroup, {
  slotProps: {
    surplus: {
      ...{
        ...{
          color: "red"
        },
        ...{
          color: "blue"
        }
      },
      ...{
        color: "yellow"
      }
    }
  }
});

// should skip non MUI components
/*#__PURE__*/(0, _jsxRuntime.jsx)(NonMuiAvatarGroup, {
  componentsProps: {
    additionalAvatar: {
      color: "red"
    }
  }
});