import { style } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

export const container = style({
  width: rem(280),
  paddingBlock: rem(12),
  paddingInline: rem(16),
  color: '#333333',
  fontSize: rem(16),
  fontWeight: 500,
  letterSpacing: rem(-0.6),
  lineHeight: rem(22),
  borderRadius: rem(8),
  backgroundColor: '#F7F8FB',
});
