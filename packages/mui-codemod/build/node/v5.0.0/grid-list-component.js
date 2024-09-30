"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file) {
  return file.source.replace(/([^a-zA-Z])GridListTileBar/gm, '$1ImageListItemBar').replace(/([^a-zA-Z])GridListTile/gm, '$1ImageListItem').replace(/([^a-zA-Z])GridList/gm, '$1ImageList');
}