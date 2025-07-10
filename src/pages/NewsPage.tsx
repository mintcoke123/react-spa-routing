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

export default function NewsPage() {
  const { category } = useParams<{ category: Category }>();
  const { setNewsData } = useNewsDataStore();
  const { theme } = useThemeStore();
  useEffect(() => {
    if (!category) return;

    setNewsData(category);
  }, [category, setNewsData]);

  return (
    <NewsPageContainer theme={theme}>
      <Header />
      <NewsList />
    </NewsPageContainer>
  );
}
