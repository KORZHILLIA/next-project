import { useState, useEffect } from 'react';

import {ThemeContext} from '@/context/themeContext';

import type { AppProps } from 'next/app';
import { IsDark } from '../context/themeContext.type';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<IsDark>(false);
  
  useEffect(() => {
    const persistTheme = localStorage.getItem('theme');
    if (persistTheme) {
      const presentTheme = persistTheme === 'false' ? false : true;
      setCurrentTheme(presentTheme);
      return;
    }
    setCurrentTheme(false);
  }, []);
  return (
    <ThemeContext.Provider value={{ isDark: currentTheme, setIsDark: setCurrentTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
