import { ChangeEvent, useState, FC } from "react";
import styled from "@emotion/styled";
import Icon, { IconName } from "./icon/Icon";
import Input from "./Input";
import { useAppDispatch, ActionType } from "../contexts/appContext";
import { useToggle } from "../hooks/useToggle";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  width: 2em;
  transition: width 0.5s;

  &:hover {
    width: 200px;
  }
`;

interface InputProps {
  expanded: boolean;
}

const InnerInput = styled(Input)<InputProps>`
  transition: visibility 1s linear, opacity 1s linear;
  visiblity: ${({ expanded }) => (expanded ? "visible" : "hidden")};
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
`;

const ApiKeyInput: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = () => {
  const [expanded, toggleExpanded] = useToggle();
  const [apiKey, setApiKey] = useState("");
  const dispatch = useAppDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    changeCity(e.currentTarget.value);
  const changeCity = (newCity: string) => {
    setApiKey(newCity);
    dispatch({ type: ActionType.SET_APP_ID, payload: apiKey });
  };
  const icon: IconName = apiKey.length > 0 ? "BsLock" : "BsUnlock";
  return (
    <InputContainer onMouseEnter={toggleExpanded} onMouseLeave={toggleExpanded}>
      <Icon size="2em" name={icon} />
      <InnerInput
        expanded={expanded}
        value={apiKey}
        onChange={onInputChange}
        placeholder="Api key"
      />
    </InputContainer>
  );
};

export default ApiKeyInput;
