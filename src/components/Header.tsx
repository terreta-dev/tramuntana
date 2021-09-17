import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const marginToChildElements = css`
  & > * {
    margin: 0px 15px;
  }
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem;
  background-color: transparent;
  height: 100%;
  grid-area: header;
  ${marginToChildElements}
`;

const Header = ({ children }: PropsWithChildren<{}>) => {
  return <InnerHeader>{children}</InnerHeader>;
};

export default Header;
