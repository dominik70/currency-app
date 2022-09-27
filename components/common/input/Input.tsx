import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: Props) => {
  return (
    <div>
      <label htmlFor={label} className="block mb-1 text-sm font-medium">
        {label}:
      </label>
      <input
        id={label}
        className="w-32 h-9 relative overflow-hidden rounded-lg bg-white text-left shadow-sm border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-75 sm:text-sm  py-2 pl-2 text-gray-900 pr-2 text-sm cursor-text dark:bg-gray-600 dark:text-white dark:input-dark"
        type="number"
        min={0}
        {...props}
      />
    </div>
  );
};
