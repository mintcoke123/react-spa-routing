import { styled } from 'styled-components';
import NewsItem from './NewsItem';
import { useNewsDataStore } from '../store/store';
import Loading from './Loading';
import Error from './Error';
import { isValidArticle } from '../../utils/utils';

const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  align-self: center;
`;

const NewsList = () => {
  const { newsData, isLoading, isError } = useNewsDataStore();

  return (
    <NewsListContainer>
      {isError && <Error />}
      {isLoading ? (
        <Loading />
      ) : (
        newsData
          .filter(isValidArticle)
          .map((article) => <NewsItem key={article.url} article={article} />)
      )}
    </NewsListContainer>
  );
};

export default NewsList;
