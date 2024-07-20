import { style } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

export const container = style({
  width: 'fit-content',
  paddingBlock: rem(8),
  paddingInline: rem(16),
  color: '#2B3C78',
  fontSize: rem(16),
  fontWeight: 500,
  letterSpacing: '-2%',
  lineHeight: rem(22),
  border: `${rem(1)} solid #DDE3F9`,
  borderRadius: rem(100),
});
