import NewsList from './NewsList';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: center;
`;

const SelectedCategory = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.title};
`;

const Main = () => {
  const { category } = useParams();
  return (
    <MainContainer>
      <SelectedCategory>{category}</SelectedCategory>
      <NewsList />
    </MainContainer>
  );
};

export default Main;
