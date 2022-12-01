import styled from 'styled-components';

export const StyledParagraphs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-top: 4rem;
  max-width: ${({ theme }) => theme.smallMaxWidth};
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  font-size: 0.875rem;
`;
