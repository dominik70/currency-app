import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ChevronDownIcon from "/public/icons/chevron-down.svg";
import { CURRENCIES } from "../../../utils/constants";

interface Props {
  currencies: string[];
  onChange: (value: string) => void;
  selected: string;
  label: string;
}

export const CurrencySelect = ({
  currencies,
  selected,
  label,
  onChange,
}: Props) => {
  return (
    <div className="w-28 relative">
      <Listbox value={selected} onChange={onChange}>
        <Listbox.Label className="text-sm font-medium">
          {label}:
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left shadow-sm sm:text-sm outline-none focus:ring-2 focus:ring-opacity-75 border-2 h-9 border-gray-300 mt-1 dark:bg-gray-600 dark:text-white">
            <span className="pr-3" aria-hidden>
              {CURRENCIES[selected]?.emoji}
            </span>
            {selected}
            <ChevronDownIcon
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 h-6 w-6 my-auto"
              aria-hidden
            />
          </Listbox.Button>
        </Listbox.Label>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            id={label}
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-opacity-5 focus:outline-none sm:text-sm z-10 dark:bg-gray-600"
          >
            {currencies.map((currency) => (
              <abbr
                title={CURRENCIES[currency]?.name}
                className="no-underline"
                key={currency}
              >
                <Listbox.Option
                  className={({ active, selected }) =>
                    `flex select-none py-2 flex-row-reverse items-end justify-end pl-3 ${
                      active ? "bg-blue-100 dark:bg-blue-800" : ""
                    } ${
                      selected && "bg-blue-200 dark:bg-blue-900"
                    } dark:text-white`
                  }
                  value={currency}
                >
                  {({ selected }) => (
                    <>
                      <span className={`${selected && "font-medium"} pl-3`}>
                        {currency}
                      </span>
                      <span aria-hidden>{CURRENCIES[currency]?.emoji}</span>
                    </>
                  )}
                </Listbox.Option>
              </abbr>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
