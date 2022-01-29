import styled from "@emotion/styled";
import WeatherFetcher from "../weather/WeatherFetcher";

const SidebarContainer = styled.div`
  grid-area: sidebar;
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <WeatherFetcher />
        </SidebarContainer>
    );
}

export default Sidebar;
