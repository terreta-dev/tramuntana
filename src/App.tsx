import { AppContextProvider } from "./contexts/appContext";
import Header from "./components/layout/Header";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme/theme";
import { useState } from "react";
import Content from "./components/layout/Content";
import Icon from "./components/icon/Icon";
import ApiKeyDropdown from "./components/ApiKeyDropdown";
import Dashboard from "./views/Dashboard";
import Search from "./components/Search";
import AppGridContainer from "./components/layout/AppGridContainer";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <AppGridContainer>
          <AppContextProvider>
            <Header>
              <Search />
              <Icon
                onClick={toggleTheme}
                size="2em"
                name={isDark ? "BsDroplet" : "BsDropletFill"}
              />
              <ApiKeyDropdown />
            </Header>
            <Sidebar/>
            <Content>
              <Dashboard />
            </Content>
          </AppContextProvider>
        </AppGridContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
