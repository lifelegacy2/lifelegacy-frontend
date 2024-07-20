import { createGlobalTheme } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

export const spaces = {
  none: '0',
  xxs: rem(2),
  xs: rem(4),
  sm: rem(8),
  md: rem(16),
  lg: rem(24),
  xl: rem(32),
  xxl: rem(40),
  xxxl: rem(48),
};

export const fontSizes = {
  xxs: rem(10),
  xs: rem(12),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  xxl: rem(24),
  xxxl: rem(32),
};

export const fontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const layouts = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
};

export const typographies = {};

export const layerStyles = {};

export const sizes = {
  appWidth: rem(480),
  appInlinePadding: rem(20),
};

export const theme = createGlobalTheme(':root', {
  colors,
  typographies,
  layouts,
  layerStyles,
  sizes,
  spaces,
});
