import React from "react";
import Head from "next/head";
import ArticleList from '../Components/ArticleList'

const index = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta
          name="keywords"
          content="web development, programming, react, next"
        />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
