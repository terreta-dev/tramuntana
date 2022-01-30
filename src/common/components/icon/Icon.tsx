import styled from "@emotion/styled";
import React from "react";
import * as BsIcons from "react-icons/bs";
import { css } from "@emotion/react";

export type IconName = keyof typeof BsIcons;

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: IconName;
  margin?: string;
  size?: string | number;
  color?: string;
  onClick?: () => void;
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

const Icon = (props: IconProps) => {
  const icon = React.createElement(BsIcons[props.name]);
  return <IconDiv {...props}>{icon}</IconDiv>;
};

export default Icon;
