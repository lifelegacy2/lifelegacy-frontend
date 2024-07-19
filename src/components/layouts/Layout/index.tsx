import { ReactElement, ReactNode } from 'react';

import * as styles from './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return <main className={styles.container}>{children}</main>;
};

export default Layout;
