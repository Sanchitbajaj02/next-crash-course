import { server } from "../../../config";
import React from "react";
import Link from "next/link";
import Meta from "../../../Components/Meta";

const article = ({ article }) => {
  return (
    <React.Fragment>
      <Meta title={article.title} description={article.excerpt} />
      <div style={{ margin: "0 3rem", textAlign: "center" }}>
        <p>Article: {article.id}</p>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <br />
      <Link href="/">Go Back</Link>
    </React.Fragment>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article;
