export enum Breakpoint {
  SM,
  MD,
  LG,
  XL,
}

const breakpoints: { [index: string]: number } = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mediaQueries = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });

export const mediaQueryFor = (breakpoint: Breakpoint): string =>
  mediaQueries[breakpoint.toString().toLowerCase()];
