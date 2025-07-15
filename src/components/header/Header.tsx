import { styled } from 'styled-components';
import CategoryList from './CategoryList';
import { TEXTS } from '../../constants/texts';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0rem;
  background-color: ${({ theme }) => theme.background};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.title};
  font-size: 3rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>{TEXTS.title}</h1>
      </TitleContainer>
      <CategoryList />
    </HeaderContainer>
  );
};

export default Header;
