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

export const button = style({
  width: rem(48),
  paddingBlock: rem(6),
  color: '#777777',
  fontSize: rem(12),
  fontWeight: 500,
  letterSpacing: '2%',
  lineHeight: rem(18),
  border: `${rem(1)} solid #E5E6E8`,
  borderRadius: rem(4),
  backgroundColor: '#F7F8F9',
});
