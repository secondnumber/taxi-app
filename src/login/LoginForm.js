/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 50,
    width: 400
  },
  button: {
    marginLeft: 320,
    marginTop: 30,
    width: 130,
    height: 40,
    background: "linear-gradient(45deg, #FFC700 30%, #FFC700 90%)",
    textTransform: "none"
  }
}));

export const LoginForm = ({ setPage }) => {
  const classes = useStyles();
  const onSubmit = e => {
    e.preventDefault();
    setPage("profile");
  };

  return (
    <form
      onSubmit={onSubmit}
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="userName"
        label="Имя пользователя *"
        placeholder="Имя пользователя"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="userPassword"
        label="Пароль *"
        placeholder="Пароль"
        className={classes.textField}
        margin="normal"
      />
      <Button variant="contained" className={classes.button}>
        Войти
      </Button>
    </form>
  );
};
