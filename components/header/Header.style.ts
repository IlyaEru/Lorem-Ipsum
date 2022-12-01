import styled from 'styled-components';
import { StyledMainHeading } from '../../styles/globalStyle';

export const StyledHeader = styled.header``;

export const StyledHero = styled(StyledMainHeading)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 1rem;
  }
`;
