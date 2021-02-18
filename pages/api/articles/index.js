import { articles } from '../../../data'

export default function handler(req, res) {
  res.status(200).json(getArticles())
}

export const getArticles = () => {
  return articles
};