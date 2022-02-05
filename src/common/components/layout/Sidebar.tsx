import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: ${(props) => props.theme.color.secondaryBackground};
  color: ${(props) => props.theme.color.secondaryText};
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: stretch;
  justify-content: space-between;
`;

const Sidebar = ({ children }: PropsWithChildren<{}>) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default Sidebar;
