import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  children,
} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isLight ? "#ffffff" : "#121212";
    document.body.style.color = isLight ? "#000000" : "#ffffff";
  }, [isLight]);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
