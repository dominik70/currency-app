import "../styles/tailwind.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Layout } from "../components/common/layout/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Currency exchange rates</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default App;
