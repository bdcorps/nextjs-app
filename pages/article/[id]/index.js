import Link from 'next/Link'
import { useRouter } from 'next/router'

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query
  console.log('g', article)
  return (
    <>
      <h1>this is {article.title}</h1>
      <p>this is {article.body}</p>
      {/* <Link href="/">Go Back</Link> */}
    </>
  )
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const article = await res.json()

//   return { props: { article } }
// }

export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()

  return { props: { article } }
}

export const getStaticPaths = async () => {
  // generates allowable IDs
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  const ids = articles.map((article => article.id))
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths, fallback: false
  }
}

export default article
