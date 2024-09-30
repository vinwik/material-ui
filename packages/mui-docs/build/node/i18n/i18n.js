"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserLanguageProvider = UserLanguageProvider;
exports.mapTranslations = mapTranslations;
exports.useSetUserLanguage = useSetUserLanguage;
exports.useTranslate = useTranslate;
exports.useUserLanguage = useUserLanguage;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("@mui/utils");
var _translations = _interopRequireDefault(require("../translations"));
var _jsxRuntime = require("react/jsx-runtime");
const TranslationsContext = /*#__PURE__*/React.createContext(_translations.default);
function TranslationsProvider({
  translations = {},
  children
}) {
  const currentTranslations = React.useContext(TranslationsContext);
  const mergedTranslations = React.useMemo(() => (0, _utils.deepmerge)(currentTranslations, translations), [currentTranslations, translations]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TranslationsContext.Provider, {
    value: mergedTranslations,
    children: children
  });
}
function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }
  const translation = path.split('.').reduce((acc, item) => acc && typeof acc === 'object' && acc[item] || null, obj);
  if (typeof translation === 'object') {
    return null;
  }
  return translation;
}
const UserLanguageContext = /*#__PURE__*/React.createContext({
  userLanguage: '',
  setUserLanguage: () => {}
});
if (process.env.NODE_ENV !== 'production') {
  UserLanguageContext.displayName = 'UserLanguage';
}
function UserLanguageProvider(props) {
  const {
    children,
    translations,
    defaultUserLanguage
  } = props;
  const [userLanguage, setUserLanguage] = React.useState(defaultUserLanguage);
  const contextValue = React.useMemo(() => {
    return {
      userLanguage,
      setUserLanguage
    };
  }, [userLanguage]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TranslationsProvider, {
    translations: translations,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(UserLanguageContext.Provider, {
      value: contextValue,
      children: children
    })
  });
}
process.env.NODE_ENV !== "production" ? UserLanguageProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  defaultUserLanguage: _propTypes.default.string
} : void 0;
function useUserLanguage() {
  return React.useContext(UserLanguageContext).userLanguage;
}
function useSetUserLanguage() {
  return React.useContext(UserLanguageContext).setUserLanguage;
}
const warnedOnce = {};

// TODO, migrate to use warnOnce() helper
const warn = (userLanguage, key, ignoreWarning) => {
  const fullKey = `${userLanguage}:${key}`;
  // No warnings in CI env
  if (!ignoreWarning && !warnedOnce[fullKey] && typeof window !== 'undefined') {
    console.warn(`Missing translation for ${fullKey}`);
    warnedOnce[fullKey] = true;
  }
};
function useTranslate() {
  const userLanguage = useUserLanguage();
  const translations = React.useContext(TranslationsContext);
  return React.useMemo(() => function translate(key, options = {}) {
    const {
      ignoreWarning = false
    } = options;
    const wordings = translations[userLanguage];
    if (!wordings) {
      console.error(`Missing language: ${userLanguage}.`);
      return '…';
    }
    const translation = getPath(wordings, key);
    if (!translation) {
      warn(userLanguage, key, ignoreWarning);
      const enTranslation = getPath(translations.en, key);
      return enTranslation ?? null;
    }
    return translation;
  }, [userLanguage, translations]);
}
function mapTranslations(req) {
  const result = {};
  req.keys().forEach(filename => {
    const match = filename.match(/-([a-z]{2}).json$/);
    if (match) {
      result[match[1]] = req(filename);
    } else {
      result.en = req(filename);
    }
  });
  return result;
}