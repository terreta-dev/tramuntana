import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const ContentContainer = styled.div`
  grid-area: content;
  padding: 20px 40px;
`;

const Content = ({ children }: PropsWithChildren<{}>) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Content;
