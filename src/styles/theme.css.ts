import { createGlobalTheme } from "@vanilla-extract/css";

import { rem } from "./pxto";

export const theme = createGlobalTheme(":root", {
  colors: {},

  fonts: {
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  },

  sizes: {
    appWidth: rem(480),
    appInlinePadding: rem(21),
  },
});
