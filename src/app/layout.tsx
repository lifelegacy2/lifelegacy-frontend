import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';

import Providers from '@/app/Providers';

import '@/styles/reset.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '라이프레거시',
  description: '라이프레거시',
};

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
