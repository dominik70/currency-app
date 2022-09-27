import Head from "next/head";
import { Conversion } from "../components/conversion/Conversion";

const Index = () => {
  return (
    <>
      <Head>
        <title>Convert currencies</title>
      </Head>
      <Conversion />
    </>
  );
};

export default Index;
