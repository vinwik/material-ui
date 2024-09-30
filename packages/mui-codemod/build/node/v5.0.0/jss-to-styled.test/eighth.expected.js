"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cart;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Link = _interopRequireDefault(require("@material-ui/core/Link"));
var _Container = _interopRequireDefault(require("modules/components/Container"));
var _AppAppBar = _interopRequireDefault(require("modules/components/AppAppBar"));
var _OrderBody = _interopRequireDefault(require("modules/components/OrderBody"));
var _Button = _interopRequireDefault(require("modules/components/Button"));
var _actionTypes = _interopRequireDefault(require("modules/redux/actionTypes"));
var _reactRedux = require("react-redux");
var _OrderSummary = _interopRequireDefault(require("modules/components/OrderSummary"));
var _AppFooter2 = _interopRequireDefault(require("modules/components/AppFooter"));
var _Stepper = _interopRequireDefault(require("modules/components/Stepper"));
var _OrderLicense = _interopRequireDefault(require("modules/components/OrderLicense"));
var _Divider = _interopRequireDefault(require("modules/components/Divider"));
var _Paper = _interopRequireDefault(require("modules/components/Paper"));
var _intersperse = _interopRequireDefault(require("modules/components/intersperse"));
var _Link2 = _interopRequireDefault(require("modules/components/Link"));
var _api = _interopRequireDefault(require("modules/api"));
var _getCart = _interopRequireDefault(require("modules/getCart"));
var _Head2 = _interopRequireDefault(require("modules/components/Head"));
var _jsxRuntime = require("react/jsx-runtime");
var _Head, _React$Fragment, _AppFooter;
const PREFIX = 'eighth';
const classes = {
  stepper: `${PREFIX}-stepper`,
  container: `${PREFIX}-container`,
  checkout: `${PREFIX}-checkout`,
  taxes: `${PREFIX}-taxes`,
  divider: `${PREFIX}-divider`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = (0, _styles.styled)('div')(({
  theme
}) => ({
  [`& .${classes.stepper}`]: {
    marginLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    marginRight: 'auto',
    minWidth: 400
  },
  [`& .${classes.container}`]: {
    marginTop: theme.spacing(4)
  },
  [`& .${classes.checkout}`]: {
    marginTop: theme.spacing(3)
  },
  [`& .${classes.taxes}`]: {
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2)
  },
  [`& .${classes.divider}`]: {
    margin: theme.spacing(3, 0)
  }
}));
function Cart() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    cart,
    cart: {
      entries: cartEntries = []
    }
  } = (0, _reactRedux.useSelector)(state => ({
    cart: state.data.cart
  }));
  React.useEffect(() => {
    if (cart.entries == null) {
      return;
    }
    window.dataLayer.push({
      ecommerce: {
        checkout: {
          actionField: {
            step: 1
          },
          products: cart.entries.map(entry => [{
            id: entry.slug,
            name: entry.name,
            price: entry.amount,
            quantity: 1
          }])
        }
      }
    });
  }, [cart.entries]);
  const handleClickRemove = entry => async () => {
    await (0, _api.default)(entry.remove, {
      transformation: 'text'
    });
    const newCart = await (0, _getCart.default)();
    dispatch({
      type: _actionTypes.default.CART_UPDATE,
      payload: newCart
    });
    window.dataLayer.push({
      event: 'EEremoveFromCart',
      ecommerce: {
        remove: {
          products: [{
            id: entry.slug,
            name: entry.name,
            price: entry.amount,
            quantity: 1
          }]
        }
      }
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, {
    children: [_Head || (_Head = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Head2.default, {
      title: "View cart",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
        name: "robots",
        content: "noindex,nofollow"
      })
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppAppBar.default, {
      essential: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Stepper.default, {
        className: classes.stepper,
        steps: ['View cart', 'Checkout', 'Confirmation'],
        activeIndex: 0
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      className: classes.container,
      maxWidth: "md",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderBody.default, {
        cart: cart,
        side: /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderSummary.default, {
          cart: cart,
          loading: !cart,
          footer: /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
              variant: "contained",
              naked: true,
              component: _Link2.default,
              to: "/order-payment/",
              fullWidth: true,
              className: classes.checkout,
              disabled: cartEntries.length === 0,
              children: 'Proceed to checkout'
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              display: "block",
              variant: "caption",
              className: classes.taxes,
              align: "center",
              children: 'Taxes may apply before placing an order.'
            })]
          })
        }),
        children: cartEntries.length === 0 ? _React$Fragment || (_React$Fragment = /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            gutterBottom: true,
            children: "Your Cart"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.default, {
            variant: "outlined",
            padding: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
              children: ['Your cart is empty, return to ', /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link2.default, {
                to: "/",
                children: "the home page"
              }), "."]
            })
          })]
        })) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
            variant: "h4",
            gutterBottom: true,
            children: ['Your cart', ' (', cartEntries.length, ')']
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.default, {
            variant: "outlined",
            padding: true,
            children: (0, _intersperse.default)(cartEntries.map(entry => /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderLicense.default, {
              entry: entry,
              side: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "subtitle1",
                children: `${entry.quantity} x $${entry.amount}`
              }),
              action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
                variant: "body2",
                component: "button",
                className: classes.remove,
                onClick: handleClickRemove(entry),
                children: 'Remove'
              })
            }, entry.slug)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
              className: classes.divider
            }))
          })]
        })
      })
    }), _AppFooter || (_AppFooter = /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppFooter2.default, {}))]
  });
}