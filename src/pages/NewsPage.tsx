import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsByCategory } from '../api/newsApi';
import { Article } from '../types/article';
import { Category } from '../types/category';
import Header from '../components/header/Header';
import { styled } from 'styled-components';
import NewsList from '../components/main/NewsList';

export default function NewsPage() {
  const { category } = useParams<{ category: Category }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    setLoading(true);
    fetchNewsByCategory(category)
      .then((data) => {
        console.log(data); // ✅ 브라우저에서 확인
        setArticles(data);
      })
      .catch((err) => {
        console.error('데이터 받아오기 실패', err);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <main>
      <h2>{category} 뉴스</h2>
      {loading && <p>로딩 중...</p>}
      {!loading && <p>뉴스 개수: {articles.length}</p>}
      <Header />
      <NewsList />
    </main>
  );
}
