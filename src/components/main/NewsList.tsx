import React from 'react';
import { styled } from 'styled-components';
import NewsItem from './NewsItem';

const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsList = () => {
  return (
    <NewsListContainer>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </NewsListContainer>
  );
};

export default NewsList;
