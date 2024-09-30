"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));
var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));
var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));
var _ExpansionPanelActions = _interopRequireDefault(require("@material-ui/core/ExpansionPanelActions"));
var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ExpansionPanel.default, {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ExpansionPanelSummary.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Typography, {
      children: "Location"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Typography, {
      children: "Select trip destination"
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ExpansionPanelDetails.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Chip, {
      label: "Barbados",
      onDelete: () => {}
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Typography, {
      variant: "caption",
      children: "Select your destination of choice"
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Divider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ExpansionPanelActions.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button, {
      size: "small",
      children: "Cancel"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, {
      size: "small",
      children: "Save"
    })]
  })]
});