import React from 'react';
import { styled } from 'styled-components';
import { Article } from '../../types/article';
import noImage from '../../assets/noImage.svg';
import {
  getShorterDescription,
  getShorterTitle,
  isLongDescription,
  isLongTitle,
} from '../../utils/utils';
import { LIGHT_COLORS, DARK_COLORS } from '../../constants/colors';
import { useThemeStore } from '../store/store';
import { Theme } from '../../types/theme';

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
  }
  padding: 0rem 7rem;
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

const NewsItemTitle = styled.h3<{ theme: Theme }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
`;

const NewsItemDescription = styled.p<{ theme: Theme }>`
  font-size: 1rem;
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.description : DARK_COLORS.description};
`;

const NewsItem = ({ article }: { article: Article }) => {
  const { theme } = useThemeStore();
  return (
    <NewsItemContainer
      theme={theme}
      onClick={() => window.open(article.url, '_blank')}
    >
      <NewsItemImage src={article.urlToImage ?? noImage} alt={article.title} />
      <NewsItemContent>
        <NewsItemTitle theme={theme}>
          {isLongTitle(article.title)
            ? getShorterTitle(article.title)
            : article.title}
        </NewsItemTitle>
        <NewsItemDescription theme={theme}>
          {article.description
            ? isLongDescription(article.description)
              ? getShorterDescription(article.description)
              : article.description
            : 'No description'}
        </NewsItemDescription>
      </NewsItemContent>
    </NewsItemContainer>
  );
};

export default NewsItem;
