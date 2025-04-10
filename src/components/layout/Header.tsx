import { Link, NavLink } from "react-router-dom";

import useTheme from "@/lib/hooks/useTheme.ts";
import { BsFillMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { navLinks } from "@/lib/constants";

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  return (
    <button
      className="rounded-md cursor-pointer dark:bg-slate-700 bg-slate-200 px-2.5 py-2.5 shadow-sm outline-none text-lg dark:text-slate-200 text-slate-700"
      onClick={toggleTheme}
    >
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

const Header = () => {
  return (
    <header>
      <div className="p-6 flex-between">
        <ul className="flex-between space-x-5">
          {navLinks.map((link, i) => (
            <li
              className="font-medium text-lg font-mono dark:text-slate-200 text-slate-700"
              key={i}
            >
              <Link to={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
