"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _jscodeshiftAddImports = _interopRequireDefault(require("jscodeshift-add-imports"));
function transformer(fileInfo, api, options) {
  const j = api.jscodeshift;
  const importModule = options.importModule || '@material-ui/core';
  const targetModule = options.targetModule || '@material-ui/core';
  let requirePath = importModule;
  if (process.env.NODE_ENV === 'test') {
    requirePath = requirePath.replace(/^@material-ui\/core/, '../../../mui-material/src');
  }

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const whitelist = require(requirePath);
  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true
  };
  const root = j(fileInfo.source);
  const importRegExp = new RegExp(`^${importModule}/(?:[^/]+/)*([^/]+)$`);
  const resultSpecifiers = [];
  root.find(j.ImportDeclaration).forEach(path => {
    if (!path.node.specifiers.length) {
      return;
    }
    if (path.value.importKind && path.value.importKind !== 'value') {
      return;
    }
    const importPath = path.value.source.value;
    const match = importPath.match(importRegExp);
    if (!match) {
      return;
    }
    if (importPath.includes('internal/')) {
      return;
    }
    path.node.specifiers.forEach((specifier, index) => {
      if (specifier.importKind && specifier.importKind !== 'value') {
        return;
      }
      if (specifier.type === 'ImportNamespaceSpecifier') {
        return;
      }
      switch (specifier.type) {
        case 'ImportDefaultSpecifier':
          {
            const localName = specifier.local.name;
            const moduleName = match[1];
            if (whitelist[moduleName] == null) {
              return;
            }
            resultSpecifiers.push(j.importSpecifier(j.identifier(moduleName), j.identifier(localName)));
            path.get('specifiers', index).prune();
            break;
          }
        case 'ImportSpecifier':
          if (whitelist[specifier.imported.name] == null && specifier.imported.name !== 'withStyles') {
            return;
          }
          resultSpecifiers.push(specifier);
          path.get('specifiers', index).prune();
          break;
        default:
          break;
      }
    });
    if (!path.node.specifiers.length) {
      path.prune();
    }
  });
  if (resultSpecifiers.length) {
    (0, _jscodeshiftAddImports.default)(root, j.importDeclaration(resultSpecifiers, j.stringLiteral(targetModule)));
  }
  return root.toSource(printOptions);
}