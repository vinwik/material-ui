"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactRedux = require("react-redux");
var _NoSsr = _interopRequireDefault(require("@material-ui/core/NoSsr"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _recompose = require("recompose");
var _AppBar = _interopRequireDefault(require("modules/components/AppBar"));
var _Logo = _interopRequireDefault(require("modules/components/Logo"));
var _Link = _interopRequireDefault(require("modules/components/Link"));
var _AppAppBarAuthenticated = _interopRequireDefault(require("modules/components/AppAppBarAuthenticated"));
var _AppAppBarUnauthenticated = _interopRequireDefault(require("modules/components/AppAppBarUnauthenticated"));
var _actionTypes = _interopRequireDefault(require("modules/redux/actionTypes"));
var _getUser = _interopRequireDefault(require("modules/getUser"));
var _getCart = _interopRequireDefault(require("modules/getCart"));
var _jsxRuntime = require("react/jsx-runtime");
// import SearchBar from 'modules/components/SearchBar';

const PREFIX = 'AppAppBar';
const classes = {
  grow: `${PREFIX}-grow`,
  wrap: `${PREFIX}-wrap`,
  wrapOpened: `${PREFIX}-wrapOpened`,
  menu: `${PREFIX}-menu`,
  menuIcon: `${PREFIX}-menuIcon`,
  closeIcon: `${PREFIX}-closeIcon`,
  burgerIcon: `${PREFIX}-burgerIcon`,
  white: `${PREFIX}-white`,
  content: `${PREFIX}-content`,
  contentOpened: `${PREFIX}-contentOpened`,
  item: `${PREFIX}-item`
};
const StyledAppBar = (0, _styles.styled)(_AppBar.default)(({
  theme
}) => ({
  [`& .${classes.grow}`]: {
    display: 'block',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  [`& .${classes.wrap}`]: {
    display: 'flex',
    flex: '1 1 auto',
    alignItems: 'center',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'baseline',
      padding: `calc(${theme.spacing(2)} - 1px) 0`,
      flexWrap: 'wrap'
    }
  },
  [`& .${classes.wrapOpened}`]: {
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.common.white,
      alignItems: 'flex-start',
      backgroundColor: theme.palette.primary.main,
      bottom: 0,
      left: 0,
      padding: theme.spacing(2),
      position: 'fixed',
      right: 0,
      top: 0
    }
  },
  [`& .${classes.menu}`]: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: theme.spacing(2)
    }
  },
  [`& .${classes.menuIcon}`]: {
    fontSize: 32,
    marginTop: -theme.spacing(1 / 2)
  },
  [`& .${classes.closeIcon}`]: {
    marginRight: theme.spacing(2)
  },
  [`& .${classes.burgerIcon}`]: {
    color: theme.palette.text.secondary
  },
  [`& .${classes.white}`]: {
    color: theme.palette.common.white
  },
  [`& .${classes.content}`]: {
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  [`& .${classes.contentOpened}`]: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    }
  },
  // searchBar: {
  //   [theme.breakpoints.down('xs')]: {
  //     flex: '1 0 100%',
  //     marginTop: theme.spacing(2),
  //   },
  // },
  [`& .${classes.item}`]: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'transparent',
      border: 0,
      color: theme.palette.common.white,
      fontSize: 24,
      height: theme.spacing(5),
      margin: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2)
    }
  }
}));
class AppAppBar extends React.Component {
  state = {
    menuOpen: false
  };
  async componentDidMount() {
    const cart = await (0, _getCart.default)();
    this.props.dispatch({
      type: _actionTypes.default.CART_UPDATE,
      payload: cart
    });
    if (this.props.user.logged != null) {
      return;
    }
    const user = await (0, _getUser.default)();
    this.props.dispatch({
      type: _actionTypes.default.USER_UPDATE,
      payload: user
    });
  }
  handleToggleMenu = (event, forceClose) => {
    if (event) {
      event.preventDefault();
    }
    this.setState({
      menuOpen: forceClose ? false : !this.state.menuOpen
    });
  };
  render() {
    const {
      children,
      essential,
      position,
      user
    } = this.props;
    const {
      menuOpen
    } = this.state;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledAppBar, {
      essential: essential,
      position: position,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _clsx.default)(classes.wrap, menuOpen && classes.wrapOpened),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
          to: "/",
          "aria-label": "Back to homepage",
          color: "inherit",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo.default, {
            color: menuOpen ? 'inherit' : 'textPrimary'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _clsx.default)(classes.content, menuOpen && [classes.contentOpened, 'mui-fixed']),
          children: [children || /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: classes.grow
          }), essential ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            className: classes.item,
            component: _Link.default,
            to: "https://support.mui.com/hc/en-us",
            target: "_blank",
            children: 'Help'
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_NoSsr.default, {
            children: [user.logged === true ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppAppBarAuthenticated.default, {
              essential: essential,
              menuOpen: menuOpen
            }) : null, user.logged === false ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppAppBarUnauthenticated.default, {
              essential: essential,
              menuOpen: menuOpen
            }) : null]
          })]
        }), essential ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _clsx.default)(classes.menu, 'mui-fixed'),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "#",
            onClick: this.handleToggleMenu,
            children: menuOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Close.default, {
              className: (0, _clsx.default)(classes.menuIcon, classes.closeIcon, classes.white, menuOpen && classes.hide)
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu.default, {
              className: (0, _clsx.default)(classes.menuIcon, classes.burgerIcon, menuOpen && classes.hide)
            })
          })
        })]
      })
    });
  }
}
process.env.NODE_ENV !== "production" ? AppAppBar.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.object.isRequired,
  essential: _propTypes.default.bool,
  position: _propTypes.default.string,
  user: _propTypes.default.object
} : void 0;
var _default = exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(state => ({
  user: state.data.user
})))(AppAppBar);