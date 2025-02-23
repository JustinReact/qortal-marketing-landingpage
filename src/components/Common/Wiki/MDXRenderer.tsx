"use client";
import { FC } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { hydrate } from "next-mdx-remote-client/csr";
import { MDXComponents } from "../../../app/wiki/mdx-components";

interface MDXRendererProps {
  source: MDXRemoteSerializeResult;
}

export const MDXRenderer: FC<MDXRendererProps> = ({ source }) => {
  const { content } = hydrate(source);
  return <MDXComponents>{content}</MDXComponents> ;
};