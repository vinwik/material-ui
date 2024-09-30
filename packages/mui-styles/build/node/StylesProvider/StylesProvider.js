"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StylesContext = void 0;
exports.default = StylesProvider;
exports.sheetsManager = void 0;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("@mui/utils");
var _jss = require("jss");
var _createGenerateClassName = _interopRequireDefault(require("../createGenerateClassName"));
var _jssPreset = _interopRequireDefault(require("../jssPreset"));
var _jsxRuntime = require("react/jsx-runtime");
// Default JSS instance.
const defaultJSS = (0, _jss.create)((0, _jssPreset.default)());

// Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.
const defaultGenerateClassName = (0, _createGenerateClassName.default)();
const defaultSheetsManager = exports.sheetsManager = new Map();
// Exported for test purposes

const defaultOptions = {
  disableGeneration: false,
  generateClassName: defaultGenerateClassName,
  jss: defaultJSS,
  sheetsCache: null,
  sheetsManager: defaultSheetsManager,
  sheetsRegistry: null
};
const StylesContext = exports.StylesContext = /*#__PURE__*/React.createContext(defaultOptions);
if (process.env.NODE_ENV !== 'production') {
  StylesContext.displayName = 'StylesContext';
}
let injectFirstNode;
function StylesProvider(props) {
  const {
    children,
    injectFirst = false,
    disableGeneration = false,
    ...localOptions
  } = props;
  const outerOptions = React.useContext(StylesContext);
  const {
    generateClassName,
    jss,
    serverGenerateClassName,
    sheetsCache,
    sheetsManager,
    sheetsRegistry
  } = {
    ...outerOptions,
    ...localOptions
  };
  if (process.env.NODE_ENV !== 'production') {
    if (injectFirst && localOptions.jss) {
      console.error('MUI: You cannot use the jss and injectFirst props at the same time.');
    }
  }
  const value = React.useMemo(() => {
    const context = {
      disableGeneration,
      generateClassName,
      jss,
      serverGenerateClassName,
      sheetsCache,
      sheetsManager,
      sheetsRegistry
    };
    if (process.env.NODE_ENV !== 'production') {
      if (typeof window === 'undefined' && !context.sheetsManager) {
        console.error('MUI: You need to use the ServerStyleSheets API when rendering on the server.');
      }
    }
    if (process.env.NODE_ENV !== 'production') {
      if (context.jss.options.insertionPoint && injectFirst) {
        console.error('MUI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
      }
    }
    if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
      if (!injectFirstNode) {
        const head = document.head;
        // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- injectFirstNode is called inside callback
        injectFirstNode = document.createComment('mui-inject-first');
        head.insertBefore(injectFirstNode, head.firstChild);
      }
      context.jss = (0, _jss.create)({
        plugins: (0, _jssPreset.default)().plugins,
        insertionPoint: injectFirstNode
      });
    }
    return context;
  }, [injectFirst, disableGeneration, generateClassName, jss, serverGenerateClassName, sheetsCache, sheetsManager, sheetsRegistry]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StylesContext.Provider, {
    value: value,
    children: children
  });
}
process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: _propTypes.default.node,
  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: _propTypes.default.bool,
  /**
   * JSS's class name generator.
   */
  generateClassName: _propTypes.default.func,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: _propTypes.default.bool,
  /**
   * JSS's instance.
   */
  jss: _propTypes.default.object,
  /**
   * @ignore
   */
  serverGenerateClassName: _propTypes.default.func,
  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: _propTypes.default.object,
  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes.default.object,
  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: _propTypes.default.object
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = (0, _utils.exactProp)(StylesProvider.propTypes) : void 0;
}