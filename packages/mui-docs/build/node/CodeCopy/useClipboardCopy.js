"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useClipboardCopy;
var React = _interopRequireWildcard(require("react"));
var _clipboardCopy = _interopRequireDefault(require("clipboard-copy"));
function useClipboardCopy() {
  const [isCopied, setIsCopied] = React.useState(false);
  const timeout = React.useRef(undefined);
  React.useEffect(() => () => {
    clearTimeout(timeout.current);
  }, []);
  const copy = async text => {
    await (0, _clipboardCopy.default)(text);
    setIsCopied(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  };
  return {
    copy,
    isCopied
  };
}