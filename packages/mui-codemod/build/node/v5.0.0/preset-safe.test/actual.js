"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@material-ui/core/styles");
var _CssBaseline2 = _interopRequireDefault(require("@material-ui/core/CssBaseline"));
var _yellow = _interopRequireDefault(require("@material-ui/core/colors/yellow"));
var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogTitle2 = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));
var _DialogContent2 = _interopRequireDefault(require("@material-ui/core/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));
var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));
var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));
var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Box4 = _interopRequireDefault(require("@material-ui/core/Box"));
var _Container = _interopRequireDefault(require("@material-ui/core/Container"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _Grid2 = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
var _withWidth = _interopRequireDefault(require("@material-ui/core/withWidth"));
var _jsxRuntime = require("react/jsx-runtime");
var _Box, _Box2, _CssBaseline, _Header, _Box3, _Grid, _DialogTitle, _DialogContent;
const DarkContext = /*#__PURE__*/React.createContext();
const Test = (0, _withWidth.default)()(props => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box4.default, {
  p: 2,
  bgcolor: "divider",
  color: _yellow.default[600],
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  children: [props.width, /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
    value: 80,
    variant: "static",
    classes: {
      static: 'className'
    }
  })]
}));
const useStyles = (0, _styles.makeStyles)(({
  palette,
  breakpoints,
  spacing,
  typography
}) => ({
  switch: {
    marginLeft: 8
  },
  autocomplete: {
    flexBasis: 200,
    '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
      transform: 'translate(14px, 12px) scale(1)'
    },
    '& .MuiInputBase-root': {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  head: {
    color: palette.type === 'dark' ? (0, _styles.fade)('#ff5252', 0.9) : palette.text.primary,
    fontSize: typography.round(breakpoints.width('sm') / 20),
    width: `calc(100% - ${spacing(10)})`
  },
  avatar: {
    width: 64,
    height: 64
  },
  badge: {
    width: 10,
    height: 10,
    '&.MuiBadge-anchorOriginTopRightCircle': {
      backgroundColor: palette.success.main
    }
  }
}));
const top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}];
const Header = () => {
  const classes = useStyles();
  const {
    dark,
    setDark
  } = React.useContext(DarkContext);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.default, {
    color: "default",
    position: "sticky",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toolbar.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        className: classes.head,
        variant: "h6",
        children: "\uD83D\uDC4B Hello"
      }), _Box || (_Box = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box4.default, {
        ml: "auto"
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Autocomplete.default, {
        className: classes.autocomplete,
        options: top100Films,
        getOptionLabel: option => option.title,
        renderInput: params => /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
          ...params,
          label: "Combo box",
          variant: "outlined"
        }),
        closeIcon: _Box2 || (_Box2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box4.default, {
          fontSize: 12,
          width: 20,
          children: "\xA0\u274C"
        }))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, {
        className: classes.switch,
        checked: dark,
        onChange: (event, checked) => setDark(checked)
      })]
    })
  });
};
function App() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const {
    setDark
  } = React.useContext(DarkContext);
  const classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [_CssBaseline || (_CssBaseline = /*#__PURE__*/(0, _jsxRuntime.jsx)(_CssBaseline2.default, {})), _Header || (_Header = /*#__PURE__*/(0, _jsxRuntime.jsx)(Header, {})), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid2.default, {
        container: true,
        spacing: 2,
        justify: "center",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid2.default, {
          item: true,
          xs: 6,
          sm: 4,
          md: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box4.default, {
            p: 2,
            display: "flex",
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
              color: "secondary",
              badgeContent: " ",
              overlap: "circle",
              classes: {
                anchorOriginTopRightCircle: classes.badge
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
                variant: "circle",
                classes: {
                  circle: classes.avatar
                }
              })
            }), _Box3 || (_Box3 = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box4.default, {
              ml: 2,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                children: "My name is ..."
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "h5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
                  children: "siriwatknp"
                })
              })]
            }))]
          })
        }), _Grid || (_Grid = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid2.default, {
          item: true,
          xs: 6,
          sm: 4,
          md: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Test, {})
        }))]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "contained",
        color: "default",
        onClick: () => setOpen(true),
        children: "Open Dialog"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog.default, {
        open: open,
        onClose: () => setOpen(false),
        onEnter: () => setDark(true),
        onExit: () => setDark(false),
        children: [_DialogTitle || (_DialogTitle = /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogTitle2.default, {
          id: "alert-dialog-title",
          children: "Use Google's location service?"
        })), _DialogContent || (_DialogContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContent2.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContentText.default, {
            id: "alert-dialog-description",
            children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
          })
        })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogActions.default, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            onClick: handleClose,
            color: "primary",
            children: "Disagree"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            onClick: handleClose,
            color: "primary",
            autoFocus: true,
            children: "Agree"
          })]
        })]
      })]
    })]
  });
}
const withThemeProvider = Component => props => {
  const [dark, setDark] = React.useState(false);
  const theme = React.useMemo(() => (0, _styles.createMuiTheme)({
    palette: {
      type: dark ? 'dark' : 'light'
    }
  }), [dark]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DarkContext.Provider, {
    value: {
      dark,
      setDark
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StylesProvider, {
      injectFirst: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.MuiThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
          ...props
        })
      })
    })
  });
};
var _default = exports.default = withThemeProvider(App);