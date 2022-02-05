import styled from "@emotion/styled";
import WeatherIcon, { IconName } from "./icon/WeatherIcon";

interface LabelProps {
  name: IconName;
  text: number | string;
  unit?: string;
}

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const Label = ({ name, text, unit }: LabelProps) => {
  return (
    <Span>
      <WeatherIcon name={name} size="2em" />
      {`${text} ${unit ?? ""}`}
    </Span>
  );
};

export default Label;
