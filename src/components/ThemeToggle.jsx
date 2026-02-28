import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button
      onClick={toggleTheme}
      className="button-primary"
      style={{ marginLeft: "10px" }}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;