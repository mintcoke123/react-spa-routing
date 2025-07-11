import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../types/category';
import Header from '../components/header/Header';
import { styled } from 'styled-components';
import { useNewsDataStore, useThemeStore } from '../components/store/store';
import { Theme } from '../types/theme';
import { DARK_COLORS, LIGHT_COLORS } from '../constants/colors';
import Main from '../components/main/main';
import ToggleButton from '../components/theme/toggleButton';

const NewsPageContainer = styled.main<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
  width: 100%;
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
      <ToggleButton />
      <Header />
      <Main />
    </NewsPageContainer>
  );
}
