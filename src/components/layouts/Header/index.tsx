import { ReactElement } from 'react';

import { sprinkles } from '@/styles/sprinkles.css';

import * as styles from './Header.css';
import HeaderButton from './HeaderButton';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): ReactElement => {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <div className={sprinkles({ layout: 'centerY', gap: 'sm' })}>
        <HeaderButton>흑백</HeaderButton>
        <HeaderButton>고대비</HeaderButton>
      </div>
    </header>
  );
};

export default Header;
