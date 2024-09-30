"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@mui/material/styles");
const DemoToolbarRoot = (0, _styles.styled)('div', {
  shouldForwardProp: prop => prop !== 'demoOptions' && prop !== 'openDemoSource'
})(({
  theme
}) => [{
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    top: 0,
    maxHeight: 50,
    display: 'block',
    marginTop: -1,
    padding: theme.spacing(0.5, 1),
    border: `1px solid ${(theme.vars || theme).palette.divider}`,
    borderTopWidth: 0,
    backgroundColor: (0, _styles.alpha)(theme.palette.grey[50], 0.2),
    borderRadius: '0 0 12px 12px',
    transition: theme.transitions.create('border-radius'),
    ...theme.applyStyles("rtl", {
      left: theme.spacing(1)
    }),
    ...theme.applyStyles("rtl", {
      right: theme.spacing(1)
    })
  },
  variants: [{
    props: {
      bg: 'inline'
    },
    style: {
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(1)
      }
    }
  }, {
    props: {
      bg: 'inline'
    },
    style: {
      [theme.breakpoints.up('sm')]: {
        borderTopWidth: 1
      }
    }
  }, {
    props: ({
      openDemoSource
    }) => openDemoSource,
    style: {
      [theme.breakpoints.up('sm')]: {
        borderRadius: 0
      }
    }
  }]
}, theme.applyDarkStyles({
  [theme.breakpoints.up('sm')]: {
    backgroundColor: (0, _styles.alpha)(theme.palette.primaryDark[800], 0.2)
  }
})]);
var _default = exports.default = DemoToolbarRoot;