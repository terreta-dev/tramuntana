export const toLocalTime = (
  secondsSinceEpoch: number,
  timezoneSeconds: number | undefined,
  includeSeconds: boolean = false
): string => {
  const isoDate = new Date(
    1000 * (secondsSinceEpoch + (timezoneSeconds ? timezoneSeconds : 0))
  ).toISOString();
  const regex = includeSeconds ? /[0-2]\d:[0-5]\d:?([0-5]\d)/ : /[0-2]\d:[0-5]\d/
  return isoDate.match(regex)?.[0] ?? "N/A";
};

export const toCalendarDate = (
  secondsSinceEpoch: number,
  timezoneSeconds: number | undefined
): string => {
  const isoDate = new Date(
    1000 * (secondsSinceEpoch + (timezoneSeconds ? timezoneSeconds : 0))
  ).toISOString();
  return isoDate.match(/\d{4}0-\d{2}-\d{2}/)?.[0] ?? "N/A";
};
