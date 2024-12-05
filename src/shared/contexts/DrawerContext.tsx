// Arquivo do contexto (AppThemeProvider.tsx)
import { createContext, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext<IDrawerContextData | undefined>(undefined);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useAppThemeContext must be used within a AppThemeProvider");
  }
  return context;
};

interface IDrawerProviderProps {
  children: React.ReactNode;
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  

  return (
    <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen }}>      
          {children}       
    </DrawerContext.Provider>
  );
};


