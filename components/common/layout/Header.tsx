import { ThemeSwitcher } from "./ThemeSwitcher";
import Logo from "/public/logo.svg";

export const Header = () => {
  return (
    <header className="relative h-48 flex items-center justify-center px-4">
      <Logo
        className="fill-white w-16 h-16 mr-6 dark:fill-gray-100"
        aria-hidden
      />
      <h1 className="sm:text-5xl text-4xl font-medium tracking-tight text-white center text-center dark:text-gray-100">
        Currency Exchange Rates
      </h1>
      <ThemeSwitcher />
    </header>
  );
};
