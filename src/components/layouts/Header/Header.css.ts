import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  ...theme.layouts.rowBetween,
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  alignItems: 'center',
  backgroundColor: theme.colors.white,
});

export const title = style({
  paddingBlock: rem(11),
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
