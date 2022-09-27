import Link from "next/link";
import { useRouter } from "next/router";

const NAV_PATHS = [
  { path: "/", name: "Conversion" },
  { path: "/charts", name: "Charts" },
  { path: "/table", name: "Table" },
];

export const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <ul className="w-full bg-gray-100 flex  rounded-t-md dark:bg-gray-900 dark:text-gray-100">
      {NAV_PATHS.map(({ path, name }) => (
        <Link href={path} key={name}>
          <li
            className={`${
              path === pathname
                ? "bg-white dark:bg-gray-800"
                : "hover:bg-gray-200 duration-200 dark:hover:bg-gray-700"
            } flex-1 text-center py-3 text-sm  rounded-t-md cursor-pointer`}
          >
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
