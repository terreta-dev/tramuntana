export const toLocalTime = (
  secondsSinceEpoch: number,
  timezoneSeconds: number | undefined
): string => {
  const isoDate = new Date(
    1000 * (secondsSinceEpoch + (timezoneSeconds ? timezoneSeconds : 0))
  ).toISOString();
  return isoDate.match(/[0-2]\d:[0-5]\d:?([0-5]\d)/)?.[0] ?? "N/A";
};

export const toCalendarDate = (
  secondsSinceEpoch: number,
  timezoneSeconds: number | undefined
): string => {
  const isoDate = new Date(
    1000 * (secondsSinceEpoch + (timezoneSeconds ? timezoneSeconds : 0))
  ).toISOString();
  return isoDate.match(/\d{4}0\-\d{2}\-\d{2}/)?.[0] ?? "N/A";
};
