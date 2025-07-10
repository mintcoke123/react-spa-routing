import React from 'react';
import { styled } from 'styled-components';
import { categories } from '../../constants/categories';
import { useThemeStore } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import { Theme } from '../../types/theme';

const HeaderContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
`;

const TitleContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
`;

const Title = styled.h1<{ theme: Theme }>`
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
`;

const ThemeButton = styled.button<{ theme: Theme }>`
  position: fixed;
  right: 1rem;
  top: 1rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
  border: none;
  border-radius: 50%;
`;

const CategoryContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  width: 90%;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
`;

const CategoryBlock = styled.div<{ onClick: () => void; theme: Theme }>`
  display: flex;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  margin: 0 0.1rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary};
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.categoryText : DARK_COLORS.categoryText};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.secondary : DARK_COLORS.secondary};
  }
  border-radius: 1rem;
`;

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <HeaderContainer theme={theme}>
      <ThemeButton theme={theme} onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </ThemeButton>
      <TitleContainer theme={theme}>
        <Title theme={theme}>News</Title>
      </TitleContainer>
      <CategoryContainer theme={theme}>
        {categories.map((category) => (
          <CategoryBlock
            key={category}
            onClick={() => navigate(`/${category}`)}
            theme={theme}
          >
            {category}
          </CategoryBlock>
        ))}
      </CategoryContainer>
    </HeaderContainer>
  );
};

export default Header;
