import { ComponentProps, ReactElement, ReactNode } from 'react';

import * as styles from './ChatBox.css';

interface ChatBoxProps extends ComponentProps<'span'> {
  children: ReactNode;
}

const ChatBox = ({ children, ...props }: ChatBoxProps): ReactElement => {
  return (
    <span className={styles.container} {...props}>
      {children}
    </span>
  );
};

export default ChatBox;
