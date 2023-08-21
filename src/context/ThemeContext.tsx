import { createContext, useState } from 'react';

export const ThemeContext = createContext<any>({
  theme: 'light-theme',
});

export const ThemeProvider = ({ children }: any) => {
  // local storage
  const [theme, setTheme] = useState('light-theme');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
