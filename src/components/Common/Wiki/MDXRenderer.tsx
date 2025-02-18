"use client";
import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { hydrate } from "next-mdx-remote-client/csr";

interface MDXRendererProps {
  source: MDXRemoteSerializeResult;
}

export const MDXRenderer: FC<MDXRendererProps> = ({ source }) => {
  const { content, mod, error } = hydrate(source);

  return <>{content}</> ;
};