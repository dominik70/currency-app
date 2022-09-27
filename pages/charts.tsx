import Head from "next/head";
import { ChartSection } from "../components/charts/ChartSection";

const ChartPage = () => {
  return (
    <>
      <Head>
        <title>Currency charts</title>
      </Head>
      <ChartSection />
    </>
  );
};

export default ChartPage;
