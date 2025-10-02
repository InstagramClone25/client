import { createContext } from 'react';

export type TTheme = 'light' | 'black' | 'system';

interface IThemeContextProps {
  theme: TTheme;
  resolvedTheme: 'light' | 'black';
  setTheme: (theme: TTheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps | undefined>(undefined);
