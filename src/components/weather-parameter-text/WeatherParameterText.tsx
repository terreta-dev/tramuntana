import React from 'react';
import { Box, Heading } from 'grommet';

interface WeatherParameterTextProps {
  parameterValue: number | string;
  label: string;
  unit: string;
}

const WeatherParameterText: React.FC<WeatherParameterTextProps> = props => {
  return (
    <Box direction="row" align="center" justify="evenly" fill="horizontal">
      <Heading level="6">{props.label}</Heading>
      <Heading level="5">{props.parameterValue + ' ' + props.unit}</Heading>
    </Box>
  );
};

export default WeatherParameterText;
