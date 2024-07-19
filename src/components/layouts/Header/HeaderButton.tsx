import { ComponentProps, ReactNode } from 'react';

import * as styles from './Header.css';

interface HeaderButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

const HeaderButton = ({ children, ...props }: HeaderButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default HeaderButton;
