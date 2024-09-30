"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
/**
 * @param {import('jscodeshift').FileInfo} file
 */
function transformer(file) {
  return file.source.replace(/\n?import.*core\/RootRef['"];?/gm, '').replace(/\n?import {\s?RootRef\s?} from ['"]@material-ui\/core\/?['"];?/gm, '').replace(/({.*)(RootRef,?)(.*})/gm, '$1$3').replace(/<RootRef.*>/gm, '<>').replace(/<\/RootRef>/gm, '</>');
}