import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const chatContainer = style({
  ...theme.layouts.column,
  marginTop: rem(40),
});
