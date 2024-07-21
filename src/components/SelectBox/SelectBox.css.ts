/* SelectBox.css */
import { style } from '@vanilla-extract/css';
import { rem } from '@/utils/pxto';
import { theme } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  paddingLeft: rem(30),
  paddingRight: rem(30),
  width: rem(400),
  position: 'absolute',
  top: '120%',
  left: '50%',
  gap: '10px',
  transform: 'translateX(-50%)',
  opacity: 0,
  pointerEvents: 'auto',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
});

export const visible = style({
  opacity: 1,
  pointerEvents: 'auto',
  transform: 'translateX(-50%) translateY(0)',
});

export const option = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: rem(8),
  borderRadius: rem(10),
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#F0F0F0',
  },
});

export const separator = style({
  width: '100%',
  border: 'none',
  borderTop: `1px solid #E1E1E1`,
  margin: rem(8, 0),
});

export const icon = style({
  width: rem(26),
  height: rem(26),
  marginRight: rem(8),
});
