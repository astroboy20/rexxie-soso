import { AvatarContainer } from "@/container/avatar";
import Layout from "@/container/maincontainer/layout";
import Head from "next/head";

const Avatar = () => {
  return (
    <>
      <Head>
        <title>Valentina 2.0</title>
        <meta name="description" content="GET A VAL!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/valentina-small.png" />
      </Head>
      <Layout>
        <AvatarContainer />
      </Layout>
    </>
  );
};

export default Avatar;
