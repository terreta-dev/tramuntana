import styled from "@emotion/styled/macro";
import { ChangeEvent, useState } from "react";
import { ActionType, useAppDispatch } from "../contexts/appContext";
import Icon, { IconName } from "./icon/Icon";
import Input from "./Input";

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.secondaryText};
  padding: 10px;
`;

const DropdownContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover > ${DropdownContent} {
    display: block;
  }
`;

const Button = styled.button`
  color: inherit;
  background: ${({ theme }) => theme.color.primaryBackground} none repeat scroll
    0% 0%;
  border: 1px solid ${({ theme }) => theme.color.secondaryText};
  border-radius: 4px;
  cursor: pointer;
`;

const ApiKeyDropdown = () => {
  const [apiKey, setApiKey] = useState("");
  const dispatch = useAppDispatch();
  const icon: IconName = apiKey.length > 0 ? "BsLock" : "BsUnlock";
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setApiKey(e.currentTarget.value);

  const saveApiKey = () =>
    dispatch({ type: ActionType.SET_APP_ID, payload: apiKey });
  return (
    <Dropdown>
      <Icon name={icon} size="2em" />

      <DropdownContent>
        <DropdownContentInner>
          <Input
            style={{
              borderColor: "red",
            }}
            value={apiKey}
            onChange={onInputChange}
            placeholder="Api key"
          />
          <Button onClick={saveApiKey}>Save key</Button>
        </DropdownContentInner>
      </DropdownContent>
    </Dropdown>
  );
};

export default ApiKeyDropdown;
