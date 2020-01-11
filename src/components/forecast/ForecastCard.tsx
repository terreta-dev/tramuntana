import React from 'react';
import { Forecast } from '../../api/interfaces/forecast';

export interface ForecastCardProps {
  forecast: Forecast;
}

export const ForecastCard: React.FC<ForecastCardProps> = (
  props: ForecastCardProps
) => {
  return (
    <div>
      <pre>{JSON.stringify(props.forecast, null, 2)}</pre>
    </div>
  );
};
