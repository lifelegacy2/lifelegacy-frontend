import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const container = style({
  ...theme.layouts.column,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  height: '1px',
  minHeight: '100%',
  paddingInline: theme.sizes.appInlinePadding,
  marginInline: 'auto',
  backgroundColor: theme.colors.white,
  overflowX: 'hidden',
  position: 'relative',

  selectors: {
    '&::before': {
      content: '',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: '50%',
      width: '1px',
      transform: `translateX(calc(-1 * ${theme.sizes.appWidth} / 2))`,
      backgroundColor: '#F5F5F5',
      zIndex: 1,
    },
    '&::after': {
      content: '',
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: '50%',
      width: '1px',
      transform: `translateX(calc(${theme.sizes.appWidth} / 2))`,
      backgroundColor: '#F5F5F5',
      zIndex: 1,
    },
  },
});
