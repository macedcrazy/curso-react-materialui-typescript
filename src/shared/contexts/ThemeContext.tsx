// Arquivo do contexto (AppThemeProvider.tsx)
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "./../themes";
import { Box } from "@mui/material";

interface IThemeContextData {
  themeName: 'Light' | 'Dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContextData | undefined>(undefined);

export const useAppThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppThemeContext must be used within a AppThemeProvider");
  }
  return context;
};

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'Light' | 'Dark'>('Light');

  const toggleTheme = useCallback(() => {
    setThemeName(prevTheme => (prevTheme === 'Light' ? 'Dark' : 'Light'));
  }, []);

  const theme = useMemo(() => (themeName === 'Light' ? LightTheme : DarkTheme), [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};


