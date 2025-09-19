import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(getSystemTheme);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
