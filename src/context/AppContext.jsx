import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  const user = {
    name: "Student",
    role: "User",
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, user }}>
      {children}
    </AppContext.Provider>
  );
};