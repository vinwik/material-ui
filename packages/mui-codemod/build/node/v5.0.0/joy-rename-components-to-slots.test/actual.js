"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _joy = require("@mui/joy");
var _Autocomplete = _interopRequireDefault(require("@mui/joy/Autocomplete"));
var _Custom = _interopRequireDefault(require("components/Custom"));
var _jsxRuntime = require("react/jsx-runtime");
// the codemod should transform only Joy UI components;

/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_joy.Alert, {
    components: {
      Root,
      Input: CustomInput
    },
    componentsProps: {
      root: {
        className: 'root'
      },
      input: {
        'data-testid': 'input'
      }
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Autocomplete.default, {
    components: {
      Root,
      Input: CustomInput
    },
    componentsProps: {
      root: {
        className: 'root'
      },
      input: {
        'data-testid': 'input'
      }
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Custom.default, {
    components: {
      Root,
      Input: CustomInput
    },
    componentsProps: {
      root: {
        className: 'root'
      },
      input: {
        'data-testid': 'input'
      }
    }
  })]
});