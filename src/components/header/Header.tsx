import React from 'react';
import { styled } from 'styled-components';
import { useThemeStore } from '../store/store';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import { Theme } from '../../types/theme';
import CategoryList from './CategoryList';
import { TEXTS } from '../../constants/texts';

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
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
  font-size: 3rem;
`;

const Header = () => {
  const { theme } = useThemeStore();

  return (
    <HeaderContainer theme={theme}>
      <TitleContainer theme={theme}>
        <h1>{TEXTS.title}</h1>
      </TitleContainer>
      <CategoryList />
    </HeaderContainer>
  );
};

export default Header;
