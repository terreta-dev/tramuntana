import Input from '../../common/components/Input';
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeCity, selectCity } from './apiDataSlice';

const CityInput = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();
  const onSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(changeCity(city));
    }
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
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

export default CityInput;
