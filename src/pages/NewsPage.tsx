import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../types/category';
import Header from '../components/header/Header';
import NewsList from '../components/main/NewsList';
import { styled } from 'styled-components';
import { useNewsDataStore, useThemeStore } from '../components/store/store';
import { Theme } from '../types/theme';
import { DARK_COLORS, LIGHT_COLORS } from '../constants/colors';

const NewsPageContainer = styled.main<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
`;

const NewsPageTitle = styled.h2<{ theme: Theme }>`
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
`;

const TempText = styled.p<{ theme: Theme }>`
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
`;

export default function NewsPage() {
  const { category } = useParams<{ category: Category }>();
  const { newsData, isLoading, setNewsData } = useNewsDataStore();
  const { toggleTheme, theme } = useThemeStore();
  useEffect(() => {
    if (!category) return;

    setNewsData(category);
  }, [category, setNewsData]);

  return (
    <NewsPageContainer theme={theme}>
      <NewsPageTitle theme={theme}>{category} 뉴스</NewsPageTitle>
      <button onClick={toggleTheme}>임시 테마 변경</button>
      {isLoading && <TempText theme={theme}>로딩 중...</TempText>}
      {!isLoading && (
        <TempText theme={theme}>뉴스 개수: {newsData.length}</TempText>
      )}
      <Header />
      <NewsList />
    </NewsPageContainer>
  );
}
