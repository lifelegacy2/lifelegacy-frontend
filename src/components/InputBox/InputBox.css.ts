import { style } from '@vanilla-extract/css';
import { rem } from '@/utils/pxto';
import { theme } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  borderRadius: rem(40),
  padding: rem(3),
  border: `1px solid #E1E1E1`,
  width: 'calc(var(--appWidth) - var(--appInlinePadding) * 2)',
  position: 'relative',
  bottom: 0,
  boxSizing: 'border-box',
  zIndex: 20,
  transition: 'transform 0.3s ease',
  marginBottom: rem(15),
});

export const moveUp = style({
  transform: 'translateY(-120px)',
});

export const input = style({
  flex: 1,
  padding: rem(10),
  borderRadius: rem(20),
  border: 'none',
  outline: 'none',
  backgroundColor: theme.colors.white,
  color: '#222222',
  fontSize: rem(16),

  '::placeholder': {
    color: '#C1C1C1',
    opacity: 1,
  },
});

export const buttonWrapper = style({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
});

export const buttonLeft = style({
  backgroundColor: '#F7F8F9',
  borderRadius: '50%',
  padding: rem(8),
  marginRight: rem(8),
  marginLeft: rem(10),
});

export const buttonRight = style({
  backgroundColor: '#D9D9D9',
  borderRadius: '50%',
  padding: rem(8),
  marginRight: rem(10),
});

export const iconLeft = style({
  color: '#777777',
});

export const iconRight = style({
  color: '#FFFFFF',
});

export const selectBoxWrapper = style({
  position: 'relative',
  width: '100%',
});
