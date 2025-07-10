import React from 'react';
import { styled } from 'styled-components';
import { categories } from '../../constants/categories';
import { useThemeStore } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { LIGHT_COLORS } from '../../constants/colors';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f0f0f0;
`;

const CategoryBlock = styled.div<{ onClick: () => void }>`
  display: flex;
  gap: 1rem;
  height: 100%;
  width: 100%;
  margin: 0 0.1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${LIGHT_COLORS.primary};
  text-align: center;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${LIGHT_COLORS.secondary};
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <HeaderContainer>
      {categories.map((category) => (
        <CategoryBlock key={category} onClick={() => navigate(`/${category}`)}>
          {category}
        </CategoryBlock>
      ))}
    </HeaderContainer>
  );
};

export default Header;
