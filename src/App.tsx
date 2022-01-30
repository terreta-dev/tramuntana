import Header from "./common/components/layout/Header";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import Content from "./common/components/layout/Content";
import AppGridContainer from "./common/components/layout/AppGridContainer";
import Sidebar from "./common/components/layout/Sidebar";
import ApiDataBox from "./features/api-data/ApiDataBox";
import WeatherFetcher from "./features/current-weather/WeatherFetcher";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppGridContainer>
            <Header>
                <ApiDataBox />
            </Header>
            <Sidebar>
                <WeatherFetcher />
            </Sidebar>
            <Content>
            </Content>
        </AppGridContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
