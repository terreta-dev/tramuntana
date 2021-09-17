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

export default WeatherIcon;
