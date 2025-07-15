import { styled } from 'styled-components';
import { Article } from '../../types/article';
import noImage from '../../assets/noImage.png';
import { MESSAGES } from '../../constants/texts';
import { isValidImageUrl } from '../../utils/utils';

const NewsItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  &:hover {
    background-color: ${({ theme }) => theme.hover};
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

const NewsItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.title};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`;

const NewsItemDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.description};
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

const NewsItem = ({ article }: { article: Article }) => {
  return (
    <NewsItemContainer onClick={() => window.open(article.url, '_blank')}>
      <NewsItemImage
        src={
          isValidImageUrl(article.urlToImage) ? article.urlToImage! : noImage
        }
        alt={article.title}
        onError={(e) => {
          e.currentTarget.src = noImage;
        }}
      />
      <NewsItemContent>
        <NewsItemTitle>{article.title}</NewsItemTitle>
        <NewsItemDescription>
          {article.description || MESSAGES.noDescription}
        </NewsItemDescription>
      </NewsItemContent>
    </NewsItemContainer>
  );
};

export default NewsItem;
