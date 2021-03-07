import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const article = ({article}) => {
  // const router = useRouter();
  // const {id} = router.query
  return (
    <React.Fragment>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </React.Fragment>
  )
}

export default article


export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}