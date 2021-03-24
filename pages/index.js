import { server } from "../config";
import React from "react";
import ArticleList from "../Components/ArticleList";

const index = ({ articles }) => {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
