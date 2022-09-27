import { Header } from "./Header";
import { Navigation } from "./Navigation";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen pb-16 bg-white flex flex-col bg-gradient-to-b from-blue-700 to-blue-600 dark:from-blue-900 dark:to-blue-800">
      <Header />
      <div className="flex flex-col items-center justify-center max-w-7xl md:w-[80%] w-full h-full min-h-64 rounded-md shadow-xl mx-auto">
        <Navigation />
        <main className="py-16 px-4 flex flex-col items-center justify-center w-full h-full bg-white dark:text-gray-100 dark:bg-gray-800 rounded-b-md">
          {children}
        </main>
      </div>
    </div>
  );
};
