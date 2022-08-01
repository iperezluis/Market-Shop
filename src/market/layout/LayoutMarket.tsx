import { FC } from "react";

import { Box, Grid, Toolbar } from "@mui/material";
import { NavBar } from "../components/NavBar";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}
export const LayoutMarket: FC<Props> = ({ children, title }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
