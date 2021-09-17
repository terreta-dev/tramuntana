import styled from "@emotion/styled";

const Input = styled.input`
  color: ${({ theme }) => theme.color.secondaryText};
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.secondaryBackground} none repeat
    scroll 0% 0%;
  color: inherit;
  padding: 11px;
  font-weight: 600;
  margin: 0px;
  border: 1px solid ${({ theme }) => theme.color.secondaryBackground};
  border-radius: 4px;
`;

export default Input;
