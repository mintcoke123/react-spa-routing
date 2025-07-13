import React from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../types/theme';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import { useThemeStore } from '../store/store';
import { MESSAGES } from '../../constants/texts';

const ErrorContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const ErrorText = styled.p<{ theme: Theme }>`
  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
`;

const Error = () => {
  const { theme } = useThemeStore();
  return (
    <ErrorContainer theme={theme}>
      <ErrorText theme={theme}>{MESSAGES.error}</ErrorText>
    </ErrorContainer>
  );
};

export default Error;
