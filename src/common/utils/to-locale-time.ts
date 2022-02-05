export const toLocalTime = (
  secondsSinceEpoch: number,
  timezoneSeconds: number | undefined,
  includeSeconds: boolean = false
): string => {
  const isoDate = toIsoDate(secondsSinceEpoch, timezoneSeconds);
  const regex = includeSeconds
    ? /[0-2]\d:[0-5]\d:?([0-5]\d)/
    : /[0-2]\d:[0-5]\d/;
  return isoDate.match(regex)?.[0] ?? "N/A";
};

export const toCalendarDate = (
  secondsSinceEpoch: number,
  timezoneSeconds: number | undefined
): string => {
  const isoDate = toIsoDate(secondsSinceEpoch, timezoneSeconds);
  return (
    isoDate
      .match(/\d{4}-\d{2}-\d{2}/)?.[0]
      .split("-")
      .reverse()
      .join("-") ?? "N/A"
  );
};

export const toWeekDay = (
  secondsSinceEpoch: number,
  timezoneSeconds: number | undefined
): string => {
  const date = new Date(
    1000 * (secondsSinceEpoch + (timezoneSeconds ? timezoneSeconds : 0))
  );
  return date.toLocaleDateString("en-US", { weekday: "long" });
};

const toIsoDate = (
  secondsSinceEpoch: number,
  timezoneSeconds: number | undefined
): string =>
  new Date(
    1000 * (secondsSinceEpoch + (timezoneSeconds ? timezoneSeconds : 0))
  ).toISOString();
