"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _propsToObject = _interopRequireDefault(require("../util/propsToObject"));
const props = ['border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'borderColor', 'borderRadius', 'displayPrint', 'display', 'overflow', 'textOverflow', 'visibility', 'whiteSpace', 'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'alignContent', 'order', 'flex', 'flexGrow', 'flexShrink', 'alignSelf', 'color', 'bgcolor', 'position', 'zIndex', 'top', 'right', 'bottom', 'left', 'boxShadow', 'width', 'maxWidth', 'minWidth', 'height', 'maxHeight', 'minHeight', 'boxSizing', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'textAlign'];

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions || {
    quote: 'single'
  };
  let aliasName;
  root.find(j.ImportDeclaration).forEach(path => {
    if (path.node.source.value.match(/^(@mui\/material|@material-ui\/core)$/)) {
      if (path.node.specifiers[0]?.type === 'ImportNamespaceSpecifier') {
        aliasName = path.node.specifiers[0].local.name;
      }
    }
  });
  return (0, _propsToObject.default)({
    j,
    root,
    aliasName,
    componentName: 'Box',
    propName: 'sx',
    props
  }).toSource(printOptions);
}