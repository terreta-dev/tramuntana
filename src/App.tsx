import { AppContextProvider } from "./contexts/appContext";
import styled from "@emotion/styled";
import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme/theme";
import { useState } from "react";
import Content from "./components/Content";
import Icon from "./components/icon/Icon";
import ApiKeyDropdown from "./components/ApiKeyDropdown";
import Dashboard from "./views/Dashboard";
import Search from "./components/Search";

const AppMainContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme.color.primaryBackground};
  color: ${(props) => props.theme.color.primaryText};
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 64px minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr);
  margin: 0 auto;
`;

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <AppMainContainer>
          <AppContextProvider>
            <Header>
              <h1>Tramuntana</h1>
              <Search />
              <Icon
                onClick={toggleTheme}
                size="2em"
                name={isDark ? "BsDroplet" : "BsDropletFill"}
              />
              <ApiKeyDropdown />
            </Header>
            <Content>
              <Dashboard />
            </Content>
          </AppContextProvider>
        </AppMainContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
