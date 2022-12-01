import styled from 'styled-components';
import { StyledButton } from '../../styles/globalStyle';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;

  label {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primaryDarkBlue};
  }

  input {
    padding: 0.25rem 0.5rem;
    width: 5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    font-size: 1.25rem;
  }
`;

export const StyledSubmitButton = styled(StyledButton)`
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.lightShadow};
  transition: all 0.1s;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryBlue2};
    box-shadow: ${({ theme }) => theme.darkShadow};
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1);
  }
`;
