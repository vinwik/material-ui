"use strict";

var _jsxRuntime = require("react/jsx-runtime");
/*#__PURE__*/(0, _jsxRuntime.jsx)(Accordion, {
  expanded: expanded,
  onChange: handleExpansion,
  slotProps: {
    transition: {
      timeout: 400
    }
  },
  sx: {
    '& .MuiAccordion-region': {
      height: expanded ? 'auto' : 0
    },
    '& .MuiAccordionDetails-root': {
      display: expanded ? 'block' : 'none'
    }
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
  sx: {
    display: 'flex',
    flexDirection: {
      xs: 'column-reverse',
      sm: 'row'
    },
    justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
    alignItems: 'end',
    flexGrow: 1,
    gap: 1,
    pb: {
      xs: 12,
      sm: 0
    },
    mt: {
      xs: 2,
      sm: 0
    },
    mb: '60px'
  }
});
/*#__PURE__*/(0, _jsxRuntime.jsx)(Box, {
  sx: {
    display: 'flex',
    alignItems: 'baseline',
    color: tier.title === 'Professional' ? 'grey.50' : undefined
  }
});