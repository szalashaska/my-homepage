import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme"));

  const handleThemeChange = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    document.body.classList.toggle("bright", theme !== "dark");
  }, [theme]);

  const data = {
    theme,
    handleThemeChange,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
