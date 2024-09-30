"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;
var _adapterV = _interopRequireDefault(require("./adapter-v4"));
var _autocompleteRenameCloseicon = _interopRequireDefault(require("./autocomplete-rename-closeicon"));
var _autocompleteRenameOption = _interopRequireDefault(require("./autocomplete-rename-option"));
var _avatarCircleCircular = _interopRequireDefault(require("./avatar-circle-circular"));
var _badgeOverlapValue = _interopRequireDefault(require("./badge-overlap-value"));
var _boxBorderradiusValues = _interopRequireDefault(require("./box-borderradius-values"));
var _boxRenameGap = _interopRequireDefault(require("./box-rename-gap"));
var _boxRenameCss = _interopRequireDefault(require("./box-rename-css"));
var _buttonColorProp = _interopRequireDefault(require("./button-color-prop"));
var _chipVariantProp = _interopRequireDefault(require("./chip-variant-prop"));
var _circularprogressVariant = _interopRequireDefault(require("./circularprogress-variant"));
var _collapseRenameCollapsedheight = _interopRequireDefault(require("./collapse-rename-collapsedheight"));
var _coreStylesImport = _interopRequireDefault(require("./core-styles-import"));
var _createTheme = _interopRequireDefault(require("./create-theme"));
var _dialogProps = _interopRequireDefault(require("./dialog-props"));
var _dialogTitleProps = _interopRequireDefault(require("./dialog-title-props"));
var _emotionPrependCache = _interopRequireDefault(require("./emotion-prepend-cache"));
var _expansionPanelComponent = _interopRequireDefault(require("./expansion-panel-component"));
var _fabVariant = _interopRequireDefault(require("./fab-variant"));
var _fadeRenameAlpha = _interopRequireDefault(require("./fade-rename-alpha"));
var _gridJustifyJustifycontent = _interopRequireDefault(require("./grid-justify-justifycontent"));
var _gridListComponent = _interopRequireDefault(require("./grid-list-component"));
var _hiddenDownProps = _interopRequireDefault(require("./hidden-down-props"));
var _iconButtonSize = _interopRequireDefault(require("./icon-button-size"));
var _materialUiStyles = _interopRequireDefault(require("./material-ui-styles"));
var _materialUiTypes = _interopRequireDefault(require("./material-ui-types"));
var _modalProps = _interopRequireDefault(require("./modal-props"));
var _movedLabModules = _interopRequireDefault(require("./moved-lab-modules"));
var _paginationRoundCircular = _interopRequireDefault(require("./pagination-round-circular"));
var _optimalImports = _interopRequireDefault(require("./optimal-imports"));
var _rootRef = _interopRequireDefault(require("./root-ref"));
var _skeletonVariant = _interopRequireDefault(require("./skeleton-variant"));
var _styledEngineProvider = _interopRequireDefault(require("./styled-engine-provider"));
var _tableProps = _interopRequireDefault(require("./table-props"));
var _tabsScrollButtons = _interopRequireDefault(require("./tabs-scroll-buttons"));
var _textareaMinmaxRows = _interopRequireDefault(require("./textarea-minmax-rows"));
var _themeAugment = _interopRequireDefault(require("./theme-augment"));
var _themeBreakpoints = _interopRequireDefault(require("./theme-breakpoints"));
var _themeBreakpointsWidth = _interopRequireDefault(require("./theme-breakpoints-width"));
var _themeOptions = _interopRequireDefault(require("./theme-options"));
var _themePaletteMode = _interopRequireDefault(require("./theme-palette-mode"));
var _themeProvider = _interopRequireDefault(require("./theme-provider"));
var _themeSpacing = _interopRequireDefault(require("./theme-spacing"));
var _themeTypographyRound = _interopRequireDefault(require("./theme-typography-round"));
var _transitions = _interopRequireDefault(require("./transitions"));
var _useTransitionprops = _interopRequireDefault(require("./use-transitionprops"));
var _withMobileDialog = _interopRequireDefault(require("./with-mobile-dialog"));
var _withWidth = _interopRequireDefault(require("./with-width"));
var _useAutocomplete = _interopRequireDefault(require("./use-autocomplete"));
var _muiReplace = _interopRequireDefault(require("./mui-replace"));
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
function transformer(file, api, options) {
  file.source = (0, _adapterV.default)(file, api, options);
  file.source = (0, _autocompleteRenameCloseicon.default)(file, api, options);
  file.source = (0, _autocompleteRenameOption.default)(file, api, options);
  file.source = (0, _avatarCircleCircular.default)(file, api, options);
  file.source = (0, _badgeOverlapValue.default)(file, api, options);
  file.source = (0, _boxBorderradiusValues.default)(file, api, options);
  file.source = (0, _boxRenameGap.default)(file, api, options);
  file.source = (0, _boxRenameCss.default)(file, api, options);
  file.source = (0, _buttonColorProp.default)(file, api, options);
  file.source = (0, _chipVariantProp.default)(file, api, options);
  file.source = (0, _circularprogressVariant.default)(file, api, options);
  file.source = (0, _collapseRenameCollapsedheight.default)(file, api, options);
  file.source = (0, _coreStylesImport.default)(file, api, options);
  file.source = (0, _createTheme.default)(file, api, options);
  file.source = (0, _dialogProps.default)(file, api, options);
  file.source = (0, _dialogTitleProps.default)(file, api, options);
  file.source = (0, _emotionPrependCache.default)(file, api, options);
  file.source = (0, _expansionPanelComponent.default)(file, api, options);
  file.source = (0, _fabVariant.default)(file, api, options);
  file.source = (0, _fadeRenameAlpha.default)(file, api, options);
  file.source = (0, _gridJustifyJustifycontent.default)(file, api, options);
  file.source = (0, _gridListComponent.default)(file, api, options);
  file.source = (0, _hiddenDownProps.default)(file, api, options);
  file.source = (0, _iconButtonSize.default)(file, api, options);
  file.source = (0, _materialUiStyles.default)(file, api, options);
  file.source = (0, _modalProps.default)(file, api, options);
  file.source = (0, _movedLabModules.default)(file, api, options);
  file.source = (0, _paginationRoundCircular.default)(file, api, options);
  file.source = (0, _optimalImports.default)(file, api, options);
  file.source = (0, _rootRef.default)(file, api, options);
  file.source = (0, _skeletonVariant.default)(file, api, options);
  file.source = (0, _styledEngineProvider.default)(file, api, options);
  file.source = (0, _tableProps.default)(file, api, options);
  file.source = (0, _tabsScrollButtons.default)(file, api, options);
  file.source = (0, _textareaMinmaxRows.default)(file, api, options);
  file.source = (0, _themeAugment.default)(file, api, options);
  file.source = (0, _themeBreakpoints.default)(file, api, options);
  file.source = (0, _themeBreakpointsWidth.default)(file, api, options);
  file.source = (0, _themeOptions.default)(file, api, options);
  file.source = (0, _themePaletteMode.default)(file, api, options);
  file.source = (0, _themeProvider.default)(file, api, options);
  file.source = (0, _themeSpacing.default)(file, api, options);
  file.source = (0, _themeTypographyRound.default)(file, api, options);
  file.source = (0, _transitions.default)(file, api, options);
  file.source = (0, _materialUiTypes.default)(file, api, options);
  file.source = (0, _useTransitionprops.default)(file, api, options);
  file.source = (0, _withMobileDialog.default)(file, api, options);
  file.source = (0, _withWidth.default)(file, api, options);
  file.source = (0, _useAutocomplete.default)(file, api, options);

  // mui-replace should be the last
  file.source = (0, _muiReplace.default)(file, api, options);
  return file.source;
}