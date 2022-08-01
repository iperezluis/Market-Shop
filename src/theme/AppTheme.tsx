import { FC } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { blackTheme } from "./blackTheme";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const AppTheme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
