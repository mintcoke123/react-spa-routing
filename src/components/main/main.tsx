import React from 'react';
import NewsList from './NewsList';
import { styled } from 'styled-components';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import { Theme } from '../../types/theme';
import { useThemeStore } from '../store/store';
import { useParams } from 'react-router-dom';

const MainContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: center;
`;

const SelectedCategory = styled.p<{ theme: Theme }>`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-left: 1rem;
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
`;

const Main = () => {
  const { theme } = useThemeStore();
  const { category } = useParams();
  return (
    <MainContainer theme={theme}>
      <SelectedCategory theme={theme}>{category}</SelectedCategory>
      <NewsList />
    </MainContainer>
  );
};

export default Main;
