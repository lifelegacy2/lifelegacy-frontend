import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const root = style({
  ...theme.layouts.rowBetween,
  alignItems: 'center',
  position: 'sticky',
  height: rem(52),
  backgroundColor: '#white',
});

export const title = style({
  color: '#111111',
  fontSize: rem(22),
  fontWeight: 600,
  letterSpacing: rem(-0.6),
  lineHeight: rem(30),
});
