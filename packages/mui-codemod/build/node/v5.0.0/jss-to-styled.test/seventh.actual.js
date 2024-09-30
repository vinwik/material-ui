"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _makeStyles = _interopRequireDefault(require("@material-ui/styles/makeStyles"));
var _CircularProgress2 = _interopRequireDefault(require("@material-ui/core/CircularProgress"));
var _gatsby = require("gatsby");
var _jsxRuntime = require("react/jsx-runtime");
var _CircularProgress;
const useStyles = (0, _makeStyles.default)({
  iframe: {
    display: 'block',
    width: '100%',
    minHeight: 400,
    maxHeight: 'calc(100vh - 187px)'
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: 400,
    alignItems: 'center'
  }
});
const onPathnameChange = ({
  pathname,
  search
}) => {
  // After logout
  if (pathname === '/') {
    window.location = (0, _gatsby.withPrefix)('/');
    return;
  }

  // For Dokan
  // Contributor theme edit /items/material-dashboard/edit/
  if (/^\/items\/(.*)\/edit\/$/.test(pathname)) {
    return;
  }
  const match = /^(\/items\/|\/contributors\/|\/order-cart\/|\/my-account\/lost-password\/)/.test(pathname);
  if (match) {
    (0, _gatsby.navigate)(`${pathname}${search}`);
    return;
  }
  const orderDownload = /^\/order-payment\/order-received\/(.*)\/$/.exec(pathname);
  if (orderDownload) {
    const orderId = parseInt(orderDownload[1], 10);
    const key = search.replace(/^\?key=/, '');
    (0, _gatsby.navigate)(`/order-download/?orderId=${orderId}&key=${key}`);
  }
};
function Iframe(props) {
  const classes = useStyles();
  const [loaded, setLoaded] = React.useState(false);
  const [iframeHeight, setIframeHeight] = React.useState(null);
  React.useEffect(() => {
    const handler = event => {
      console.log('event.data', event.data);
      const scrollHeight = event.data.scrollHeight;
      if (scrollHeight) {
        setIframeHeight(scrollHeight);
      }
      if (event.data.pathname) {
        onPathnameChange({
          pathname: event.data.pathname,
          search: event.data.search
        });
      }
    };
    window.addEventListener('message', handler, false);
    return () => {
      window.removeEventListener('message', handler, false);
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [loaded === false ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes.loader,
      children: _CircularProgress || (_CircularProgress = /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress2.default, {}))
    }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
      className: classes.iframe,
      title: "body",
      style: {
        visibility: loaded ? 'visible' : 'hidden',
        height: loaded ? null : 100,
        minHeight: iframeHeight
      },
      onLoad: () => {
        if (props.onLoad) {
          props.onLoad();
        }
        setLoaded(true);
      },
      frameBorder: "0",
      ...props
    })]
  });
}
var _default = exports.default = Iframe;