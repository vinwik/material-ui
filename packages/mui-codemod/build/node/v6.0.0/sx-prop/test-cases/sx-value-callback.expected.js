"use strict";

var _jsxRuntime = require("react/jsx-runtime");
function FacebookCircularProgress(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Box, {
    sx: {
      position: 'relative'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CircularProgress, {
      variant: "determinate",
      sx: theme => ({
        color: theme.palette.grey[800],
        ...theme.applyStyles("light", {
          color: theme.palette.grey[200]
        })
      }),
      size: 40,
      thickness: 4,
      ...props,
      value: 100
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularProgress, {
      variant: "indeterminate",
      disableShrink: true,
      sx: theme => ({
        color: '#308fe8',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round'
        },
        ...theme.applyStyles("light", {
          color: '#1a90ff'
        })
      }),
      size: 40,
      thickness: 4,
      ...props
    })]
  });
}
/*#__PURE__*/(0, _jsxRuntime.jsx)(Paper, {
  elevation: 0,
  sx: theme => ({
    display: 'flex',
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap'
  })
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Divider, {
  sx: theme => ({
    border: `1px solid ${'#000'}`,
    ...theme.applyStyles("dark", {
      border: `1px solid ${'#fff'}`
    })
  })
});
/*#__PURE__*/(0, _jsxRuntime.jsxs)(Typography, {
  component: "span",
  variant: "subtitle1",
  color: "inherit",
  sx: theme => ({
    position: 'relative',
    p: 4,
    pt: 2,
    pb: `calc(${theme.spacing(1)} + 6px)`
  }),
  children: [image.title, /*#__PURE__*/(0, _jsxRuntime.jsx)(ImageMarked, {
    className: "MuiImageMarked-root"
  })]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Autocomplete, {
  sx: theme => ({
    display: 'inline-block',
    '& input': {
      width: 200,
      bgcolor: 'background.paper',
      color: theme.palette.getContrastText(theme.palette.background.paper)
    }
  }),
  id: "custom-input-demo",
  options: options,
  renderInput: params => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: params.InputProps.ref,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "text",
      ...params.inputProps
    })
  })
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
  sx: theme => ({
    position: 'relative',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    p: 4
  })
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Backdrop, {
  sx: theme => ({
    color: '#fff',
    zIndex: theme.zIndex.drawer + 1
  }),
  open: open,
  onClick: handleClose,
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularProgress, {
    color: "inherit"
  })
});