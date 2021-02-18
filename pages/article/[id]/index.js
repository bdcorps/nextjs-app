import { server } from '../../../config'
import Link from 'next/Link'
import { useRouter } from 'next/router'
import { getArticles } from '../../api/articles'
import { getArticle } from '../../api/articles/[id]'

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

//this is the view 
export const getStaticProps = async (context) => {
  // const res = await fetch(`${server}/api/articles/${context.params.id}`)
  // const article = await res.json()

  const article = getArticle(context.params.id)
  return { props: { article } }
}

// geenrates allowable paths
export const getStaticPaths = async () => {
  // generates allowable IDs
  const articles = getArticles()

  const ids = articles.map((article => article.id))
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths, fallback: false
  }
}

export default article
