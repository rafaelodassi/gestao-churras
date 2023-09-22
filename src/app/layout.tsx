'use client';

import { Provider } from 'react-redux';

import { Open_Sans } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '../lib/registry';
import { setupStore } from '../store';
import { Theme, GlobalStyles } from '../styles/themeConfig';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  style: 'normal',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Gestão Churras</title>
      </head>
      <body className={openSans.className}>
        <Provider store={setupStore()}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={Theme}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
