import styled from 'styled-components';
import { StyledContainer } from '../../styles/globalStyle';

export const StyledLayout = styled(StyledContainer)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  main {
    max-width: ${({ theme }) => theme.largeMaxWidth};
  }
`;
