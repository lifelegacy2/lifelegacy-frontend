import { ReactElement } from 'react';

import * as styles from './Header.css';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): ReactElement => {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default Header;
