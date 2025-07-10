import React from 'react';
import { styled } from 'styled-components';
import NewsItem from './NewsItem';
import { useNewsDataStore, useThemeStore } from '../store/store';
import Loading from './Loading';
import { Theme } from '../../types/theme';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';

const NewsListContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
`;

const NewsList = () => {
  const { newsData, isLoading } = useNewsDataStore();
  const { theme } = useThemeStore();

  return (
    <NewsListContainer theme={theme}>
      {isLoading ? (
        <Loading />
      ) : (
        newsData.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))
      )}
    </NewsListContainer>
  );
};

export default NewsList;
