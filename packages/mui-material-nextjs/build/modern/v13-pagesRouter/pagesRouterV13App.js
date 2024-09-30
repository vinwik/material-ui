import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from "./createCache.js";
import { jsx as _jsx } from "react/jsx-runtime";
const defaultEmotionCache = createEmotionCache();
export function AppCacheProvider({
  emotionCache = defaultEmotionCache,
  children
}) {
  return /*#__PURE__*/_jsx(CacheProvider, {
    value: emotionCache,
    children: children
  });
}