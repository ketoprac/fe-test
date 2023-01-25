import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-5">
      <Head>
        <title>Skilltest MyTEnS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
