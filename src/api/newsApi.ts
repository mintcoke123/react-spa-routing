import { Category } from '../types/category';
import { Article } from '../types/article';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export async function fetchNewsByCategory(
  category: Category,
): Promise<Article[]> {
  const url = `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('뉴스를 불러오지 못했습니다');
  }

  const data = await res.json();
  return data.articles as Article[];
}
