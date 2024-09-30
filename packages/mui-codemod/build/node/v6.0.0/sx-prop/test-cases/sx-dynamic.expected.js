"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
  sx: theme => ({
    mb: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
    backgroundColor: theme.palette.grey[900],
    borderBottom: `1px solid ${'grey.800'}`,
    ...theme.applyStyles("light", {
      backgroundColor: theme.palette.grey[100],
      borderBottom: `1px solid ${'grey.200'}`
    })
  })
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Card, {
  sx: [theme => ({
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }), tier.title === 'Professional' && (theme => ({
    border: 'none',
    boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
    background: 'radial-gradient(circle at 50% 0%, hsl(210, 98%, 35%), hsl(210, 100%, 16%))',
    ...theme.applyStyles("light", {
      boxShadow: `0 8px 12px hsla(210, 98%, 42%, 0.2)`
    })
  }))]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Card, {
  component: Button,
  onClick: () => handleItemClick(index),
  sx: [theme => ({
    p: 3,
    height: 'fit-content',
    width: '100%',
    background: 'none',
    '&:hover': {
      background: 'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
      borderColor: 'primary.dark',
      boxShadow: '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
      ...theme.applyStyles("light", {
        background: 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)',
        borderColor: 'primary.light',
        boxShadow: '0px 2px 8px hsla(0, 0%, 0%, 0.1)'
      })
    }
  }), selectedItemIndex === index && (theme => ({
    backgroundColor: 'action.selected',
    borderColor: 'primary.dark',
    ...theme.applyStyles("light", {
      borderColor: 'primary.light'
    })
  }))]
}, index);
/*#__PURE__*/(0, _jsxRuntime.jsx)(CreditCardRoundedIcon, {
  fontSize: "small",
  sx: [theme => ({
    color: 'grey.600',
    ...theme.applyStyles("light", {
      color: 'grey.400'
    })
  }), paymentType === 'creditCard' && {
    color: 'primary.main'
  }]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(IconButton, {
  edge: "start",
  color: "inherit",
  "aria-label": "open drawer",
  onClick: toggleDrawer,
  sx: [{
    marginRight: '36px'
  }, open && {
    display: 'none'
  }],
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuIcon, {})
});
/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
  sx: [selectedItemIndex === index && (theme => ({
    backgroundColor: 'action.selected',
    borderColor: 'primary.dark',
    ...theme.applyStyles("light", {
      borderColor: 'primary.light'
    })
  })), theme => ({
    color: 'grey.600',
    ...theme.applyStyles("light", {
      color: 'grey.400'
    })
  }), paymentType === 'creditCard' && {
    color: 'primary.main'
  }, {
    marginRight: '36px'
  }, open && {
    display: 'none'
  }]
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Step, {
  indicator: /*#__PURE__*/(0, _jsxRuntime.jsx)(StepIndicator, {
    variant: activeStep <= index ? 'soft' : 'solid',
    color: activeStep < index ? 'neutral' : 'primary',
    children: activeStep <= index ? index + 1 : /*#__PURE__*/(0, _jsxRuntime.jsx)(Check, {})
  }),
  sx: [activeStep > index && index !== 2 && {
    '&:not([data-active])': {
      '&::after': {
        bgcolor: 'primary.solidBg'
      }
    }
  }],
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(StepButton, {
    onClick: () => setActiveStep(index),
    children: step
  })
}, step);