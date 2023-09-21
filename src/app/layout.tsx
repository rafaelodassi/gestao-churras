'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '../lib/registry';
import { Theme, GlobalStyles } from '../styles/themeConfig';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
