import { styled } from 'styled-components';
import { MESSAGES } from '../../constants/texts';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.title};
`;

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorText>{MESSAGES.error}</ErrorText>
    </ErrorContainer>
  );
};

export default Error;
