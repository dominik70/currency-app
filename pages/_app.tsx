import "../styles/tailwind.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Currency exchange rates</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
