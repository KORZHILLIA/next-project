import { useState } from 'react';

import type { AppProps } from 'next/app';

import {ThemeContext} from '@/context/themeContext';

import { IsDark } from '@/context/themeContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<IsDark>(false);
  return (
    <ThemeContext.Provider value={{isDark: currentTheme, setIsDark: setCurrentTheme}}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
