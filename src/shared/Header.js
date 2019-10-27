import React from "react";
import logoHeader from "./logo-header.png";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./Header.css";

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: 10,
    width: 120,
    height: 45,
    textTransform: "none"
  },
  buttonFirst: {
    marginLeft: "65vw",
    width: 120,
    height: 45,
    textTransform: "none"
  }
}));

export const Header = ({ setPage }) => {
  const classes = useStyles();

  return (
    <Box component="div" boxShadow={2} height="90px">
      <img src={logoHeader} className="Header-logo" alt="logo" />
      <Button
        variant="text"
        className={classes.buttonFirst}
        onClick={() => setPage("map")}
      >
        Карта
      </Button>
      <Button
        variant="text"
        className={classes.button}
        onClick={() => setPage("profile")}
      >
        Профиль
      </Button>
      <Button
        variant="text"
        className={classes.button}
        onClick={() => setPage("login")}
      >
        Выйти
      </Button>
    </Box>
  );
};
