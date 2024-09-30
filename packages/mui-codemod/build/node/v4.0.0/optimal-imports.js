"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _path = require("path");
var _jscodeshiftAddImports = _interopRequireDefault(require("jscodeshift-add-imports"));
var _getJSExports = _interopRequireDefault(require("../util/getJSExports"));
// istanbul ignore next
if (process.env.NODE_ENV === 'test') {
  const resolve = require.resolve;
  require.resolve = source => resolve(source.replace(/^@material-ui\/core\/es/, '../../../mui-material/src'));
}
function transformer(fileInfo, api, options) {
  const j = api.jscodeshift;
  const importModule = options.importModule || '@material-ui/core';
  const targetModule = options.targetModule || '@material-ui/core';
  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true
  };
  const root = j(fileInfo.source);
  const importRegExp = new RegExp(`^${importModule}/([^/]+/)+([^/]+)$`);
  const resultSpecifiers = new Map();
  const addSpecifier = (source, specifier) => {
    if (!resultSpecifiers.has(source)) {
      resultSpecifiers.set(source, []);
    }
    resultSpecifiers.get(source).push(specifier);
  };
  root.find(j.ImportDeclaration).forEach(path => {
    if (path.value.importKind && path.value.importKind !== 'value') {
      return;
    }
    const importPath = path.value.source.value.replace(/(index)?(\.js)?$/, '');
    const match = importPath.match(importRegExp);
    if (!match) {
      return;
    }
    const subpath = match[1].replace(/\/$/, '');
    if (/^(internal)/.test(subpath)) {
      return;
    }
    const targetImportPath = `${targetModule}/${subpath}`;
    const whitelist = (0, _getJSExports.default)(require.resolve(`${importModule}/es/${subpath}`, {
      paths: [(0, _path.dirname)(fileInfo.path)]
    }));
    path.node.specifiers.forEach((specifier, index) => {
      if (!path.node.specifiers.length) {
        return;
      }
      if (specifier.importKind && specifier.importKind !== 'value') {
        return;
      }
      if (specifier.type === 'ImportNamespaceSpecifier') {
        return;
      }
      const localName = specifier.local.name;
      switch (specifier.type) {
        case 'ImportNamespaceSpecifier':
          return;
        case 'ImportDefaultSpecifier':
          {
            const moduleName = match[2];
            if (!whitelist.has(moduleName) && moduleName !== 'withStyles') {
              return;
            }
            addSpecifier(targetImportPath, j.importSpecifier(j.identifier(moduleName), j.identifier(localName)));
            path.get('specifiers', index).prune();
            break;
          }
        case 'ImportSpecifier':
          if (!whitelist.has(specifier.imported.name)) {
            return;
          }
          addSpecifier(targetImportPath, specifier);
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
  (0, _jscodeshiftAddImports.default)(root, [...resultSpecifiers.keys()].sort().map(source => j.importDeclaration(resultSpecifiers.get(source).sort(), j.stringLiteral(source))));
  return root.toSource(printOptions);
}