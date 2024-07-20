// Libs
import { createContext, useState, ReactNode, useCallback, useMemo } from 'react';

// Constant
import { THEMES } from 'constants/themes';
interface ThemeContextType {
  theme: string;
  changeTheme: () => void;
}

interface AppProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: THEMES.LIGHT,
} as ThemeContextType);

const ThemeProvider = ({ children }: AppProps) => {
  const [theme, setTheme] = useState<string>(THEMES.LIGHT);

  const changeTheme = useCallback(() => {
    setTheme((prevState) => prevState === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }, []);

  const value = useMemo(() => ({
    theme,
    changeTheme,
  }), [theme, changeTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
