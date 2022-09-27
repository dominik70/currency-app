import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="flex items-center text-gray-500 h-8 px-4 border-gray-300 border-2 mb-1 rounded shadow-sm duration-150 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
      {...props}
    >
      {children}
    </button>
  );
};
