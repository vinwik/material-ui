"use strict";

var _jsxRuntime = require("react/jsx-runtime");
function FacebookCircularProgress(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Box, {
    sx: {
      position: 'relative'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CircularProgress, {
      variant: "determinate",
      sx: {
        color: theme => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
      },
      size: 40,
      thickness: 4,
      ...props,
      value: 100
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularProgress, {
      variant: "indeterminate",
      disableShrink: true,
      sx: {
        color: theme => theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round'
        }
      },
      size: 40,
      thickness: 4,
      ...props
    })]
  });
}
/*#__PURE__*/(0, _jsxRuntime.jsx)(Paper, {
  elevation: 0,
  sx: {
    display: 'flex',
    border: theme => `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap'
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Divider, {
  sx: {
    border: theme => `1px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsxs)(Typography, {
  component: "span",
  variant: "subtitle1",
  color: "inherit",
  sx: {
    position: 'relative',
    p: 4,
    pt: 2,
    pb: theme => `calc(${theme.spacing(1)} + 6px)`
  },
  children: [image.title, /*#__PURE__*/(0, _jsxRuntime.jsx)(ImageMarked, {
    className: "MuiImageMarked-root"
  })]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Autocomplete, {
  sx: {
    display: 'inline-block',
    '& input': {
      width: 200,
      bgcolor: 'background.paper',
      color: theme => theme.palette.getContrastText(theme.palette.background.paper)
    }
  },
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
  sx: {
    position: 'relative',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: theme => theme.shadows[5],
    p: 4
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Backdrop, {
  sx: {
    color: '#fff',
    zIndex: theme => theme.zIndex.drawer + 1
  },
  open: open,
  onClick: handleClose,
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CircularProgress, {
    color: "inherit"
  })
});