import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primaryBackground: string;
      secondaryBackground: string;
      primaryText: string;
      secondaryText: string;
      primaryAccent: string;
      secondaryAccent: string;
    };
  }
}
