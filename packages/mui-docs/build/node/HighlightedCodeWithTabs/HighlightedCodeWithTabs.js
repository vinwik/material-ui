"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeTabPanel = exports.CodeTabList = exports.CodeTab = void 0;
exports.HighlightedCodeWithTabs = HighlightedCodeWithTabs;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Tabs = require("@mui/base/Tabs");
var _TabsList = require("@mui/base/TabsList");
var _TabPanel = require("@mui/base/TabPanel");
var _Tab = require("@mui/base/Tab");
var _useLocalStorageState = _interopRequireDefault(require("@mui/utils/useLocalStorageState"));
var _HighlightedCode = require("../HighlightedCode");
var _jsxRuntime = require("react/jsx-runtime");
const CodeTabList = exports.CodeTabList = (0, _styles.styled)(_TabsList.TabsList)(({
  theme
}) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  borderLeft: '1px solid',
  borderRight: '1px solid',
  overflowX: 'auto',
  ...theme.applyDarkStyles({
    backgroundColor: (0, _styles.alpha)(theme.palette.primaryDark[800], 0.2)
  }),
  variants: [{
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      padding: theme.spacing(1.5, 1)
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      padding: theme.spacing(1)
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      borderTop: 'none'
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      borderTop: '1px solid'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      borderBottom: 'none'
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      borderBottom: '1px solid'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      borderTopLeftRadius: 0
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      borderTopLeftRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      borderTopRightRadius: 0
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      borderTopRightRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      borderColor: (theme.vars || theme).palette.divider
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      borderColor: (theme.vars || theme).palette.primaryDark[700]
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      backgroundColor: (0, _styles.alpha)(theme.palette.grey[50], 0.2)
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      backgroundColor: (theme.vars || theme).palette.primaryDark[900]
    }
  }]
}));
const CodeTabPanel = exports.CodeTabPanel = (0, _styles.styled)(_TabPanel.TabPanel)({
  '& pre': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    '& code': {}
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      marginTop: -1
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      marginTop: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      '& pre': {
        marginTop: 0
      }
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      '& pre': {
        marginTop: -1
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.mounted,
    style: {
      '& pre': {
        '& code': {
          opacity: 1
        }
      }
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.mounted,
    style: {
      '& pre': {
        '& code': {
          opacity: 0
        }
      }
    }
  }]
});
const CodeTab = exports.CodeTab = (0, _styles.styled)(_Tab.Tab)(({
  theme
}) => ({
  variants: [{
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      border: '1px solid transparent',
      fontSize: theme.typography.pxToRem(13)
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      border: 'none',
      fontSize: theme.typography.pxToRem(12)
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      color: (theme.vars || theme).palette.text.tertiary
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      color: (theme.vars || theme).palette.grey[500]
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      fontFamily: theme.typography.fontFamily
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      fontFamily: theme.typography.fontFamilyCode
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      fontWeight: theme.typography.fontWeightMedium
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      fontWeight: theme.typography.fontWeightBold
    }
  }, {
    props: ({
      ownerState
    }) => ownerState?.contained,
    style: {
      transition: 'background, color, 100ms ease'
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      transition: 'unset'
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained,
    style: {
      '&:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette.primaryDark[500], 0.5),
        color: (theme.vars || theme).palette.grey[400]
      }
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState?.contained && ownerState.mounted,
    style: {
      '&.base--selected': {
        color: '#FFF',
        '&::after': {
          content: "''",
          position: 'absolute',
          left: 0,
          bottom: '-8px',
          height: 2,
          width: '100%',
          bgcolor: (theme.vars || theme).palette.primary.light
        }
      }
    }
  }],
  ...theme.unstable_sx({
    flex: '0 0 auto',
    height: 26,
    p: '2px 8px',
    bgcolor: 'transparent',
    lineHeight: 1.2,
    outline: 'none',
    minWidth: 45,
    cursor: 'pointer',
    borderRadius: 99,
    position: 'relative',
    '&:hover': {
      backgroundColor: (theme.vars || theme).palette.divider
    },
    '&:focus-visible': {
      outline: '3px solid',
      outlineOffset: '1px',
      outlineColor: (theme.vars || theme).palette.primary.light
    }
  })
}));
function HighlightedCodeWithTabs(props) {
  const {
    tabs,
    storageKey
  } = props;
  const availableTabs = React.useMemo(() => tabs.map(({
    tab
  }) => tab), [tabs]);
  const [activeTab, setActiveTab] = (0, _useLocalStorageState.default)(storageKey ?? null, availableTabs[0]);
  // During hydration, activeTab is null, default to first value.
  const defaultizedActiveTab = activeTab ?? availableTabs[0];
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const ownerState = {
    mounted
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.Tabs, {
    selectionFollowsFocus: true,
    value: defaultizedActiveTab,
    onChange: handleChange,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CodeTabList, {
      ownerState: ownerState,
      children: tabs.map(({
        tab
      }) => /*#__PURE__*/(0, _jsxRuntime.jsx)(CodeTab, {
        ownerState: ownerState,
        value: tab,
        children: tab
      }, tab))
    }), tabs.map(({
      tab,
      language,
      code
    }) => /*#__PURE__*/(0, _jsxRuntime.jsx)(CodeTabPanel, {
      ownerState: ownerState,
      value: tab,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HighlightedCode.HighlightedCode, {
        language: language || 'bash',
        code: typeof code === 'function' ? code(tab) : code
      })
    }, tab))]
  });
}