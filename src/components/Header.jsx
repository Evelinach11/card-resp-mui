import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar, Toolbar, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#2196f3",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar
        className={classes.toolbar}
        style={{ flexDirection: isSmallScreen ? "column" : "row" }}
      >
        <Typography variant="h6">
          <a href="#" className={classes.link}>
            Your
          </a>
        </Typography>
        <Typography variant="h6">
          <a href="#" className={classes.link}>
            Your Website
          </a>
        </Typography>
        <Typography variant="h6">
          <a href="#" className={classes.link}>
            Your Website Name
          </a>
        </Typography>
        <Typography variant="h6">
          <a href="#" className={classes.link}>
            Website Name
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
