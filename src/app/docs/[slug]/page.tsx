import React from "react";
import Api from "../../../components/Api/Api";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let pageTitle: string;

  if (slug === "q-apps") {
    pageTitle = "Q-Apps Documentation";
  } else {
    pageTitle = "Unknown Page";
  }

  return {
    title: `${pageTitle} | Qortal API`,
    description: `This is the ${pageTitle} page to help developers build on the Qortal Blockchain.`
  };
}

const DocsPage = () => {
  return <Api />;
};

export default DocsPage;
