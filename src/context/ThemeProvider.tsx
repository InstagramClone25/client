import { type ReactNode, useEffect, useState } from 'react';

import { ThemeContext, type TTheme } from '@/context/ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<TTheme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'black'>('light');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as TTheme) || 'system';
    setThemeState(savedTheme);

    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const updateResolvedTheme = (currentTheme: TTheme) => {
      if (currentTheme === 'system') {
        setResolvedTheme(colorScheme.matches ? 'black' : 'light');
        document.documentElement.setAttribute(
          'data-theme',
          colorScheme.matches ? 'black' : 'light'
        );
      } else {
        setResolvedTheme(currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
      }
    };

    updateResolvedTheme(savedTheme);

    const handleChangeColorScheme = () => {
      if (theme === 'system') updateResolvedTheme('system');
    };

    colorScheme.addEventListener('change', handleChangeColorScheme);

    return () => {
      colorScheme.removeEventListener('change', handleChangeColorScheme);
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
