import { Link as RouterLink } from "react-router-dom";

import {
  MenuOutlined,
  Notifications,
  LogoutOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Tooltip,
  Badge,
  Link,
} from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: "100vw" },
      }}
    >
      <Toolbar>
        <IconButton
          color="secondary"
          edge="start"
          sx={{ display: { sm: "none" }, mr: 2 }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ ml: 1 }}
        >
          <Grid
            item
            display="flex"
            className="animate__animated animate__bounce"
          >
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                transform: `rotate(-30deg)`,
                fontWeight: "bold",
                fontSize: 25,
                backgorundColor: "red",
                position: "absolute",
                bottom: 3,
              }}
            >
              e
            </Typography>
            <Link component={RouterLink} color="#000" to="/">
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ fontWeight: "bold", color: "yellow", ml: 1.5 }}
              >
                Found
              </Typography>
            </Link>
          </Grid>

          <Grid item>
            <Tooltip title="Notificaciones" arrow>
              <IconButton onClick={() => {}} sx={{ color: "white", mr: 2 }}>
                <Badge badgeContent={4} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
            </Tooltip>
            {/* {isOpenNotify && (
              <Grid
                item
                sx={{
                  position: "absolute",
                  top: 45,
                  right: 100,
                  width: "30vw",
                }}
              >
                <Notification />
              </Grid>
            )} */}

            <Tooltip title="Salir de la cuenta" arrow>
              <IconButton onClick={() => {}} sx={{ color: "white" }}>
                <LogoutOutlined />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
