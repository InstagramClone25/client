import { type ReactNode, useEffect, useState } from 'react';

import { ThemeContext, type TTheme } from '@/context/ThemeContext';

type TLightBlack = 'light' | 'black';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<TTheme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<TLightBlack>('light');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as TTheme) || 'system';
    setThemeState(savedTheme);

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const updateResolvedTheme = (currentTheme: TTheme) => {
      let _currentTheme = currentTheme;

      if (_currentTheme === 'system') {
        _currentTheme = prefersDarkScheme.matches ? 'black' : 'light';
      }

      setResolvedTheme(_currentTheme);
      document.documentElement.setAttribute('data-theme', _currentTheme);
    };

    updateResolvedTheme(savedTheme);

    const handleChangePrefersDarkScheme = () => {
      if (theme === 'system') updateResolvedTheme('system');
    };

    prefersDarkScheme.addEventListener('change', handleChangePrefersDarkScheme);

    return () => {
      prefersDarkScheme.removeEventListener('change', handleChangePrefersDarkScheme);
    };
  }, [theme]);

  const setTheme = (newTheme: TTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
