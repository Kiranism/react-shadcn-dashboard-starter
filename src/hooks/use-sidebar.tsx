import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext<{
  isMinimized: boolean;
  toggle: () => void;
}>({
  isMinimized: false,
  toggle: () => {}
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggle = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <SidebarContext.Provider value={{ isMinimized, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
