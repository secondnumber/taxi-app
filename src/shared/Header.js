import React from "react";
import logoHeader from "../assets/img/logo-header.png";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MaterialStyles.js";
import "../assets/css/Header.css";

export const Header = ({ setPage }) => {
  const classes = useStyles();

  return (
    <Box component="div" boxShadow={2} height="80px">
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
