import { ChangeEvent, KeyboardEvent, useState } from "react";
import { ActionType, useAppDispatch } from "../contexts/appContext";
import Input from "./Input";

const Search = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();
  const onSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch({ type: ActionType.SET_CITY, payload: city });
    }
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <Input
      defaultValue={city}
      onChange={onInputChange}
      onKeyPress={onSearch}
      placeholder="City"
    />
  );
};

export default Search;
