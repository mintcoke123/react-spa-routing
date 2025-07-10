import React from 'react';
import { styled } from 'styled-components';

const NewsItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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

const NewsItem = () => {
  return (
    <NewsItemContainer>
      <NewsItemImage src="https://via.placeholder.com/150" />
      <NewsItemContent>
        <NewsItemTitle>NewsItemTitle</NewsItemTitle>
        <NewsItemDescription>NewsItemDescription</NewsItemDescription>
      </NewsItemContent>
    </NewsItemContainer>
  );
};

export default NewsItem;
