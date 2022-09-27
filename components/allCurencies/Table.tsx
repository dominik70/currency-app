import { Rate } from "../../types";
import { CURRENCIES } from "../../utils/constants";

interface Props {
  rates: Rate;
}

export const Table = ({ rates }: Props) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 w-full inline-block align-middle overflow-hidden border rounded-lg">
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr className="divide-x divide-gray-200 text-gray-600 text-xs font-bold uppercase dark:text-white">
          <th scope="col" className="px-6 py-3 hidden sm:table-cell">
            ID
          </th>
          <th scope="col" className="px-6 py-3 hidden sm:table-cell">
            name
          </th>
          <th scope="col" className="px-6 py-3">
            code
          </th>
          <th scope="col" className="px-6 py-3">
            symbol
          </th>
          <th scope="col" className="px-6 py-3">
            rate
          </th>
        </tr>
      </thead>
      {Object.entries(rates).map(([currency, rate], i) => (
        <tbody key={currency} className="divide-y divide-gray-200">
          <tr
            className={`divide-x divide-gray-200 text-sm text-gray-800 whitespace-nowrap text-center dark:text-white ${
              i % 2 === 1 && "bg-gray-50 dark:bg-gray-700"
            } ${i % 2 === 0 && "dark:bg-gray-600"}`}
          >
            <td className="px-6 py-4 hidden sm:table-cell">{i + 1}</td>
            <td className="px-6 py-4 hidden sm:table-cell">
              {CURRENCIES[currency]?.name}
            </td>
            <td className="px-6 py-4">
              <span aria-hidden className="mr-1">
                {CURRENCIES[currency]?.emoji}
              </span>{" "}
              {currency}
            </td>
            <td className="px-6 py-4">{CURRENCIES[currency]?.symbol_native}</td>
            <td className="px-6 py-4">{rate}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
