import ArticleList from '../components/ArticleList'
import { server } from '../config'
import { getArticles } from './api/articles'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <h1>Index page</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch(`${server}/api/articles`)
  const articles = getArticles()
  // const articles = [{ id: '1', title: "title", body: "body" }]
  return { props: { articles } }
}