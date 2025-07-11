import React from 'react';
import { styled } from 'styled-components';
import NewsItem from './NewsItem';
import { useNewsDataStore, useThemeStore } from '../store/store';
import Loading from './Loading';
import { Theme } from '../../types/theme';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import { v4 as uuidv4 } from 'uuid';
import Error from './Error';

const NewsListContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
  align-self: center;
`;

const NewsList = () => {
  const { newsData, isLoading, isError } = useNewsDataStore();
  const { theme } = useThemeStore();

  return (
    <NewsListContainer theme={theme}>
      {isError && <Error />}
      {isLoading ? (
        <Loading />
      ) : (
        newsData.map((article) => <NewsItem key={uuidv4()} article={article} />)
      )}
    </NewsListContainer>
  );
};

export default NewsList;
