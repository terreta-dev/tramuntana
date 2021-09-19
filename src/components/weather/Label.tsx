import styled from "@emotion/styled";
import WeatherIcon, { IconName } from "../icon/WeatherIcon";

interface LabelProps {
  name: IconName;
  text: number | string;
  unit?: string;
}

const Span = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
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
