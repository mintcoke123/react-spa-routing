import React from 'react';
import { styled } from 'styled-components';
import { Article } from '../../types/article';
import noImage from '../../assets/noImage.png';
import { LIGHT_COLORS, DARK_COLORS } from '../../constants/colors';
import { useThemeStore } from '../store/store';
import { Theme } from '../../types/theme';
import { MESSAGES } from '../../constants/texts';

const NewsItemContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
  &:hover {
    background-color: ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.hover : DARK_COLORS.hover};
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

const NewsItemImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  object-fit: cover;
  object-position: center;
`;

const NewsItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`;

const NewsItemTitle = styled.h3<{ theme: Theme }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`;

const NewsItemDescription = styled.p<{ theme: Theme }>`
  font-size: 1rem;
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.description : DARK_COLORS.description};
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

const NewsItem = ({ article }: { article: Article }) => {
  const { theme } = useThemeStore();
  return (
    <NewsItemContainer
      theme={theme}
      onClick={() => window.open(article.url, '_blank')}
    >
      <NewsItemImage
        src={article.urlToImage || noImage}
        onError={(e) => {
          e.currentTarget.src = noImage;
        }}
      />
      <NewsItemContent>
        <NewsItemTitle theme={theme}>{article.title}</NewsItemTitle>
        <NewsItemDescription theme={theme}>
          {article.description || MESSAGES.noDescription}
        </NewsItemDescription>
      </NewsItemContent>
    </NewsItemContainer>
  );
};

export default NewsItem;
