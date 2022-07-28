import React from "react";
import TopBar from "./TopBar";
import { Layout } from "antd";

import ContentArea from "./ContentArea";

function Home() {
  return (
    <Layout>
      <TopBar />
      <ContentArea />
    </Layout>
  );
}

export default Home;
