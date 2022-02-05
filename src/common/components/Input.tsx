import styled from "@emotion/styled";

const Input = styled.input`
  color: ${({ theme }) => theme.color.secondaryText};
  background: ${({ theme }) => theme.color.primaryAccent} none repeat scroll 0%
    0%;
  padding: 11px;
  font-weight: 600;
  margin: 0px;
  border-radius: 1em;
  border: 0px;
`;

export default Input;
