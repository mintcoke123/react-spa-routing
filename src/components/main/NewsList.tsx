import React from 'react';
import { styled } from 'styled-components';
import NewsItem from './NewsItem';
import { useNewsDataStore } from '../store/store';
import Loading from './Loading';

const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsList = () => {
  const { newsData, isLoading } = useNewsDataStore();

  return (
    <NewsListContainer>
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
