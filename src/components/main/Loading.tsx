import React from 'react';
import { styled } from 'styled-components';
import { MESSAGES } from '../../constants/texts';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.loadingText};
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingText>{MESSAGES.loading}</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
