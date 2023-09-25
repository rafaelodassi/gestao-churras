'use client';

import { Provider } from 'react-redux';

import { ConfigProvider, Layout } from 'antd';
import { ThemeProvider } from 'styled-components';

import AntdRegistry from '../lib/AntdRegistry';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import { setupStore } from '../store';
import { GlobalStyles, Theme } from '../styles/themeConfig';

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
      <body>
        <Provider store={setupStore()}>
          <StyledComponentsRegistry>
            <AntdRegistry>
              <ThemeProvider theme={Theme}>
                <ConfigProvider theme={Theme}>
                  <GlobalStyles />
                  <Layout>{children}</Layout>
                </ConfigProvider>
              </ThemeProvider>
            </AntdRegistry>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
