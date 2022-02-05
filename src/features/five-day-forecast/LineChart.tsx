import { ResponsiveLine } from "@nivo/line";

interface LineChartProps {
  data: LineChartData[];
}

export interface LineChartData {
  id: string;
  color: string;
  data: DataPoint[];
}

export interface DataPoint {
  y: any;
  x: any;
}

const LineChart = ({ data }: LineChartProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      reverse: false,
    }}
    yFormat=" >-.1f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Day",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Degrees (ºC)",
      legendOffset: -30,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    useMesh={true}
    curve="natural"
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 105,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 100,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 8,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default LineChart;
