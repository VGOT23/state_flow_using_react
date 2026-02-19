import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeToggle = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
