import Header from "./common/components/layout/Header";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import Content from "./common/components/layout/Content";
import AppGridContainer from "./common/components/layout/AppGridContainer";
import Sidebar from "./common/components/layout/Sidebar";
import WeatherFetcher from "./features/current-weather/WeatherFetcher";
import { useAppSelector } from "./app/hooks";
import { selectApiKey } from "./features/api-data/apiDataSlice";
import ApiKeyView from "./features/api-data/ApiKeyView";
import CityInput from "./features/api-data/CityInput";

const App = () => {
    const apiKey = useAppSelector(selectApiKey);
    const hasApiKey = (key: string) => !!key && key !== "";
  return (
      <>
          <ThemeProvider theme={theme}>

              { hasApiKey(apiKey) ?
                  (<AppGridContainer>
                  <Header>
                  <CityInput />
                  </Header>
                  <Sidebar>
                  <WeatherFetcher />
                  </Sidebar>
                  <Content>
                  </Content>
                  </AppGridContainer>)
                  :
                  (<ApiKeyView />)
                  }
          </ThemeProvider>
      </>
  );
};

export default App;
