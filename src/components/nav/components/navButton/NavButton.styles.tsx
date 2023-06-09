import styled from "@emotion/styled";

const StyledNavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  background-color: ${({ theme: { background } }): string => background};
  transition: background-color 150ms, border 150ms;
  .button-label {
    font-weight: 400;
    font-size: 12px;
  }
  &:hover {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
  }
  &:active {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
  }
`;

export default StyledNavButton;
