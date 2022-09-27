import { useState, Fragment, useEffect, memo } from "react";
import { Switch } from "@headlessui/react";
import DarkThemeIcon from "/public/icons/dark-theme-icon.svg";
import LightThemeIcon from "/public/icons/light-theme-icon.svg";

type Theme = "light" | "dark";

const getInitialTheme = () => {
  try {
    const theme = localStorage.getItem("theme");

    if (theme === "light" || theme === "dark") {
      return theme;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    return userMedia.matches ? "dark" : "light";
  } catch {
    return "light";
  }
};

export const ThemeSwitcher = memo(() => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleThemeToggle = () => {
    setTheme((prevState) => {
      const newState = prevState === "dark" ? "light" : "dark";

      localStorage.setItem("theme", newState);
      return newState;
    });
  };

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    const doc = window.document.documentElement;

    if (theme === "dark") {
      doc.classList.add("dark");
    } else {
      doc.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Switch
      checked={theme === "dark"}
      onChange={handleThemeToggle}
      as={Fragment}
    >
      {({ checked }) => (
        <button
          className={`${
            checked ? "bg-blue-600" : "bg-gray-300"
          } transition duration-100 inline-flex h-7 w-14 items-center rounded-full absolute right-[5%] m-auto my-auto shadow-md top-4 sm:top-auto`}
        >
          <span className="sr-only">
            Switch to {checked ? "light" : "dark"} theme
          </span>
          <span
            className={`${
              checked ? "translate-x-8" : "translate-x-1"
            } inline-block h-5 w-5 transform rounded-full bg-white transition duration-300`}
          >
            {checked ? <DarkThemeIcon /> : <LightThemeIcon />}
          </span>
        </button>
      )}
    </Switch>
  );
});

ThemeSwitcher.displayName = "ThemeSwitcher";
