"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
  sx: {
    backgroundImage: theme => theme.palette.mode === 'light' ? items[selectedItemIndex].imageLight : items[selectedItemIndex].imageDark
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
  style: props.style,
  sx: {
    backgroundImage: theme => theme.palette.mode === 'light' ? items[selectedItemIndex].imageLight : items[selectedItemIndex].imageDark
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
  style: {
    color: 'red',
    ...props.style
  },
  sx: {
    backgroundImage: theme => theme.palette.mode === 'light' ? items[selectedItemIndex].imageLight : items[selectedItemIndex].imageDark
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
  ...props,
  sx: {
    backgroundImage: theme => theme.palette.mode === 'light' ? items[selectedItemIndex].imageLight : items[selectedItemIndex].imageDark
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Paper, {
  sx: {
    position: 'relative',
    backgroundColor: 'grey.800',
    color: '#fff',
    mb: 4,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${post.image})`
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Chip, {
  size: "sm",
  variant: "outlined",
  color: colors[data.role],
  sx: {
    ml: 'auto',
    borderRadius: '2px',
    minHeight: '20px',
    paddingInline: '4px',
    fontSize: 'xs',
    bgcolor: `${colors[data.role]}.softBg`
  },
  children: data.role
});