import React from 'react';
import { styled } from 'styled-components';
import { Article } from '../../types/article';

const NewsItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
`;

const NewsItemImage = styled.img`
  width: 12rem;
  height: 10rem;
  border-radius: 1rem;
  align-self: left;
  object-fit: cover;
`;

const NewsItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NewsItemDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const NewsItem = ({ article }: { article: Article }) => {
  return (
    <NewsItemContainer onClick={() => window.open(article.url, '_blank')}>
      <NewsItemImage src={article.urlToImage} alt={article.title} />
      <NewsItemContent>
        <NewsItemTitle>{article.title}</NewsItemTitle>
        <NewsItemDescription>{article.description}</NewsItemDescription>
      </NewsItemContent>
    </NewsItemContainer>
  );
};

export default NewsItem;
