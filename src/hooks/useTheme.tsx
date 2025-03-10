import React, { createContext, useContext, useState, ReactNode } from 'react';
import defaultTheme from '../theme';

type ThemeType = typeof defaultTheme;

interface ThemeContextType {
  theme: ThemeType;
  isDarkMode: boolean;
  toggleThemeMode: () => void;
  colors: typeof defaultTheme.colors;
  spacing: typeof defaultTheme.spacing;
  typography: typeof defaultTheme.typography;
  shadows: typeof defaultTheme.shadows;
  animations: typeof defaultTheme.animations;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  isDarkMode: false,
  toggleThemeMode: () => {},
  colors: defaultTheme.colors,
  spacing: defaultTheme.spacing,
  typography: defaultTheme.typography,
  shadows: defaultTheme.shadows,
  animations: defaultTheme.animations,
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // In a real app, you would implement the dark theme values here
  const theme = isDarkMode ? defaultTheme : defaultTheme;

  const toggleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = {
    theme,
    isDarkMode,
    toggleThemeMode,
    colors: theme.colors,
    spacing: theme.spacing,
    typography: theme.typography,
    shadows: theme.shadows,
    animations: theme.animations,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);