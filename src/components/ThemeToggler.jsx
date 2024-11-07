import useTheme from "@/hooks/useTheme.js";
import { BsFillMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      <div className="text-xl">
        <span className="dark:hidden block">
          <FiSun />
        </span>
        <span className="dark:block hidden">
          <BsFillMoonFill />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggler;
