import Head from "next/head";
import { AllCurencies } from "../components/allCurencies/AllCurencies";

const AllCurrenciesPage = () => {
  return (
    <>
      <Head>
        <title>All currencies</title>
      </Head>
      <AllCurencies />
    </>
  );
};

export default AllCurrenciesPage;
