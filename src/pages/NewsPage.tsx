import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../types/category';
import Header from '../components/header/Header';
import NewsList from '../components/main/NewsList';
import { useNewsDataStore } from '../components/store/store';

export default function NewsPage() {
  const { category } = useParams<{ category: Category }>();
  const { newsData, isLoading, setNewsData } = useNewsDataStore();

  useEffect(() => {
    if (!category) return;

    setNewsData(category);
  }, [category, setNewsData]);

  return (
    <main>
      <h2>{category} 뉴스</h2>
      {isLoading && <p>로딩 중...</p>}
      {!isLoading && <p>뉴스 개수: {newsData.length}</p>}
      <Header />
      <NewsList />
    </main>
  );
}
