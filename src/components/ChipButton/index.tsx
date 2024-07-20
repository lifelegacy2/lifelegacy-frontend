import { ComponentProps, ReactElement, ReactNode } from 'react';

import * as styles from './ChipButton.css';

interface ChipButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

const ChipButton = ({ children, ...props }: ChipButtonProps): ReactElement => {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
};

export default ChipButton;
