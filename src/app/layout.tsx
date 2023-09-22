'use client';

import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd';
import { Open_Sans } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import AntdRegistry from '../lib/AntdRegistry';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import { setupStore } from '../store';
import { GlobalStyles, Theme } from '../styles/themeConfig';

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
            <AntdRegistry>
              <ThemeProvider theme={Theme}>
                <ConfigProvider theme={Theme}>
                  <GlobalStyles />
                  {children}
                </ConfigProvider>
              </ThemeProvider>
            </AntdRegistry>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
