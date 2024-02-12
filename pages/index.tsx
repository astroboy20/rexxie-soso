import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeContainer } from "@/container/home";
import Layout from "@/container/maincontainer/layout";
import { Vendors } from "@/container/vendors";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Valentina 2.0</title>
        <meta name="description" content="GET A VAL!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/valentina-small.png" />
      </Head>
      <Layout>
        <HomeContainer />
        <Vendors />
      </Layout>
    </>
  );
}
