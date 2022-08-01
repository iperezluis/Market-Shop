import { FC } from "react";

import { Grid, Typography } from "@mui/material";
import image from "../assets/bg-chat.jpeg";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title: string;
}
export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      display="flex"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000",
        ":before": {
          content: '""',
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: 0.4,
          backgroundImage: `url(${image})`,
          backgroundSize: "500px",
          // backgroundColor: "#000",
          zIndex: 0,
        },
        padding: 4,
        width: "100vw",
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "rgba(250,250,250,0.5)", //rgba transparaent
          padding: 3,
          borderRadius: 2,
          width: { md: "50vw" },
          zIndex: 999,
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 1, color: "#000", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
