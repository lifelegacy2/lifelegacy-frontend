import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const chatContainer = style({
  ...theme.layouts.column,
  marginTop: rem(40),
});

export const messageContainer = style({
  ...theme.layouts.column,
  position: 'sticky',
  top: '100%',
  left: 0,
  right: 0,
  alignItems: 'center',
  backgroundColor: theme.colors.white,
});

export const messageContainerExpanded = style({
  top: '60%',
});
