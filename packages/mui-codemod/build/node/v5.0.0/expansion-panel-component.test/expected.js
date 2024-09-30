"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _AccordionActions = _interopRequireDefault(require("@material-ui/core/AccordionActions"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion.default, {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_AccordionSummary.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Typography, {
      children: "Location"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Typography, {
      children: "Select trip destination"
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AccordionDetails.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Chip, {
      label: "Barbados",
      onDelete: () => {}
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Typography, {
      variant: "caption",
      children: "Select your destination of choice"
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Divider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AccordionActions.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button, {
      size: "small",
      children: "Cancel"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, {
      size: "small",
      children: "Save"
    })]
  })]
});