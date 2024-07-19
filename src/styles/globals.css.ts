import { globalStyle } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  backgroundColor: theme.colors.white,
});
