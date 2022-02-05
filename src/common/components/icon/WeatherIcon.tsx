import styled from "@emotion/styled";
import * as WiIcons from "react-icons/wi";
import { css } from "@emotion/react";
import { createElement } from "react";

export type IconName = keyof typeof WiIcons;

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: IconName;
  margin?: string;
  size?: string | number;
  color?: string;
}

const marginForIcon = ({ margin }: IconProps) =>
  margin
    ? css`
        margin: ${margin};
      `
    : css``;

const IconDiv = styled.div<IconProps>`
  ${marginForIcon}
  font-size: ${({ size }) => size || "1em"};
  height: 1em;
  color: ${({ color, theme }) => color || theme.color.primaryText};
`;

const WeatherIcon = (props: IconProps) => {
  const icon = createElement(WiIcons[props.name]);
  return <IconDiv {...props}>{icon}</IconDiv>;
};

export const getWeatherIcon = (nameFromApi: string): IconName => {
  const codesToIcon: { [key: string]: IconName } = {
    "01d": "WiDaySunny",
    "01n": "WiNightClear",
    "02d": "WiDayCloudy",
    "02n": "WiNightCloudy",
    "03d": "WiDayCloudy",
    "03n": "WiNightCloudy",
    "04d": "WiCloudy",
    "04n": "WiCloudy",
    "09d": "WiRain",
    "09n": "WiRain",
    "10d": "WiDayRain",
    "10n": "WiNightRain",
    "11d": "WiThunderstorm",
    "11n": "WiThunderstorm",
    "13d": "WiSnow",
    "13n": "WiSnow",
    "50d": "WiDayFog",
    "50n": "WiNightFog",
  };
  return codesToIcon[nameFromApi];
};

export default WeatherIcon;
