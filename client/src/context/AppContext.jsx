import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  // Example of some global states
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}
