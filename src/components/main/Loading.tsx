import React from 'react';
import { styled } from 'styled-components';
import { useThemeStore } from '../store/store';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import { Theme } from '../../types/theme';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingText = styled.p<{ theme: Theme }>`
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.loadingText : DARK_COLORS.loadingText};
`;

const Loading = () => {
  const { theme } = useThemeStore();
  return (
    <LoadingContainer>
      <LoadingText theme={theme}>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
