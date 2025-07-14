import { Category } from '../types/category';
import { Article } from '../types/article';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export async function fetchNewsByCategory(
  category: Category,
): Promise<Article[]> {
  const response = await axios.get<{ articles: Article[] }>(BASE_URL, {
    params: {
      country: 'us',
      category,
      apiKey: API_KEY,
    },
  });

  return response.data.articles;
}
