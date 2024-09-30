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
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));
var _reactRedux = require("react-redux");
var _ShoppingCartOutlined = _interopRequireDefault(require("@material-ui/icons/ShoppingCartOutlined"));
var recompose = _interopRequireWildcard(require("recompose"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Link = _interopRequireDefault(require("modules/components/Link"));
var _jsxRuntime = require("react/jsx-runtime");
const PREFIX = 'AppAppBarCart';
const classes = {
  root: `${PREFIX}-root`,
  icon: `${PREFIX}-icon`,
  badge: `${PREFIX}-badge`,
  transparentBadge: `${PREFIX}-transparentBadge`
};
const StyledIconButton = (0, _styles.styled)(_IconButton.default)(({
  theme
}) => ({
  [`&.${classes.root}`]: {
    padding: 8,
    '&&&': {
      marginLeft: 0
    }
  },
  [`& .${classes.icon}`]: {
    fontSize: 24
  },
  [`& .${classes.badge}`]: {
    right: 2,
    top: -8,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  [`& .${classes.transparentBadge}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main
  }
}));

// eslint-disable-next-line react/display-name
const LinkToCart = /*#__PURE__*/React.forwardRef((linkProps, ref) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
  ...linkProps,
  to: "/order-cart/",
  ref: ref
}));
function AppAppBarCart(props) {
  const {
    className,
    variant,
    cart,
    transparent
  } = props;
  const count = cart.count || 0;
  return variant === 'text' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
    component: LinkToCart,
    className: className,
    children: ['Cart', " ", count > 0 && `(${count})`]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledIconButton, {
    color: transparent ? 'inherit' : undefined,
    component: LinkToCart,
    className: (0, _clsx.default)(classes.root, className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ShoppingCartOutlined.default, {
      className: classes.icon
    }), count > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.default, {
      color: "primary",
      classes: {
        badge: (0, _clsx.default)(classes.badge, transparent && classes.transparentBadge)
      },
      badgeContent: count > 9 ? '+9' : count,
      children: ''
    })]
  });
}
AppAppBarCart.displayName = 'AppAppBarCart';
process.env.NODE_ENV !== "production" ? AppAppBarCart.propTypes = {
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['text', 'icon']),
  transparent: _propTypes.default.bool
} : void 0;
AppAppBarCart.defaultProps = {
  variant: 'icon'
};
var _default = exports.default = recompose.compose((0, _reactRedux.connect)(state => ({
  cart: state.data.cart
})))(AppAppBarCart);