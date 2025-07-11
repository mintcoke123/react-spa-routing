import React from 'react';
import { styled } from 'styled-components';
import { categories } from '../../constants/categories';
import { useThemeStore } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import { Theme } from '../../types/theme';
import lightMode from '../../assets/lightMode.png';
import darkMode from '../../assets/darkMode.png';

const HeaderContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
`;

const TitleContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.background : DARK_COLORS.background};
`;

const Title = styled.h1<{ theme: Theme }>`
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
  font-size: 4rem;
`;

const ThemeButton = styled.button<{ theme: Theme }>`
  position: fixed;
  width: 6rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 1.5rem;
  top: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CategoryContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 6rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary};
  border: 1px solid
    ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary};
`;

const CategoryBlock = styled.div<{
  onClick: () => void;
  theme: Theme;
  isSelected: boolean;
}>`
  flex: 1;
  display: flex;
  height: 80%;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  background-color: ${({ isSelected, theme }) =>
    theme === 'light'
      ? isSelected
        ? LIGHT_COLORS.primary
        : LIGHT_COLORS.background
      : isSelected
        ? DARK_COLORS.primary
        : DARK_COLORS.background};

  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
  cursor: pointer;
  border-left: 1px solid
    ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary};
  background-image: linear-gradient(
    to top,
    ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary}
  );
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: background-size 0.3s ease-in-out;

  &:hover {
    background-size: 100% 100%;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useThemeStore();
  const { category } = useParams();

  const selectedCategory = category;

  return (
    <HeaderContainer theme={theme}>
      <ThemeButton theme={theme} onClick={toggleTheme}>
        <img
          src={theme === 'light' ? lightMode : darkMode}
          alt="theme"
          width="100%"
          height="auto"
        />
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
            isSelected={selectedCategory === category}
          >
            {category}
          </CategoryBlock>
        ))}
      </CategoryContainer>
    </HeaderContainer>
  );
};

export default Header;
