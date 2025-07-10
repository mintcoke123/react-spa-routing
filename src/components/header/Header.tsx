import React from 'react';
import { styled } from 'styled-components';
import { categories } from '../../constants/categories';
import { useThemeStore } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import { Theme } from '../../types/theme';

const HeaderContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
`;

const CategoryBlock = styled.div<{ onClick: () => void; theme: Theme }>`
  display: flex;
  gap: 1rem;
  height: 100%;
  width: 100%;
  margin: 0 0.1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary};
  text-align: center;
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.secondary : DARK_COLORS.secondary};
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const { theme } = useThemeStore();

  return (
    <HeaderContainer theme={theme}>
      {categories.map((category) => (
        <CategoryBlock key={category} onClick={() => navigate(`/${category}`)}>
          {category}
        </CategoryBlock>
      ))}
    </HeaderContainer>
  );
};

export default Header;
