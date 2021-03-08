import { server } from "../config/index";
import React from "react";
import ArticleList from "../Components/ArticleList";

const index = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  // const res = await fetch(`${server}/api/articles`);
  // const articles = await res.json();

  const res = await fetch(`${server}/api/articles`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
  });
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
