import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import Button from "../../common/components/Button";
import Input from "../../common/components/Input";
import { changeApiKey, changeCity } from "./apiDataSlice";

const ViewContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    color: ${(props) => props.theme.color.primaryText};
    background: ${(props) => props.theme.color.primaryBackground};
    background: linear-gradient(90deg, ${(props) => props.theme.color.secondaryBackground} 18%, ${(props) => props.theme.color.primaryBackground} 100%);
`;

const Box = styled.div`
    min-width: 300px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-around;
    padding: 20px;
`;


const ApiKeyView = () => {
    const dispatch = useAppDispatch();
    const [apiKey, setApiKey] = useState("");
    const [city, setCity] = useState("");
    const onInputChange = (callback: (value: string) => void) => {
        return (e: ChangeEvent<HTMLInputElement>) => {
            callback(e.currentTarget.value);
        };
    };
    const fillData = () => {
        if (apiKey !== "") {
            dispatch(changeCity(city));
            dispatch(changeApiKey(apiKey));
        }
    };
    return (
        <ViewContainer>
            <Box>
                <h2>Tramuntana</h2>
                <Input
                    style={{width: "200px"}}
                    defaultValue={apiKey}
                    onChange={onInputChange(setApiKey)}
                    placeholder="Fill with your API key"
                />
                <Input
                    style={{width: "200px"}}
                    defaultValue={city}
                    onChange={onInputChange(setCity)}
                    placeholder="Load weather for city?"
                />
                <Button
                    style={{width: "222px"}}
                    onClick={fillData}>
                    Submit
                </Button>
            </Box>
        </ViewContainer>
    );
};

export default ApiKeyView;
