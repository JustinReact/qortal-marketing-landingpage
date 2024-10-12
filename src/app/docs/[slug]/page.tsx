import React from "react";
import Api from "../../../components/Api/Api";

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  let pageTitle: string;

  if (params.slug === "q-apps") {
    pageTitle = "Q-Apps Documentation";
  } else if (params.slug === "extension") {
    pageTitle = "Qortal Browser Extension Documentation";
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
