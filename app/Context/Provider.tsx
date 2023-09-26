"use client"
import { ReactNode, useState } from "react";
import providerFile from './ThemeContext';

const AgentsProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(false);
  
  const contextObj = {
    theme, 
    setTheme
  };

  return (
    <div>
      <providerFile.Provider value={contextObj}>
        {children}
      </providerFile.Provider>
    </div>
  );
};

export default AgentsProvider;