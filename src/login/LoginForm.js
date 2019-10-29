/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../shared/MaterialStyles.js";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import "../assets/css/Form.css";

export const LoginForm = ({ setPage }) => {
  const classes = useStyles();
  const onSubmit = e => {
    e.preventDefault();
    setPage("profile");
  };

  return (
    <Box
      component="div"
      bgcolor="primary.contrastText"
      boxShadow={3}
      borderRadius={5}
      width={500}
      height={400}
      mr="auto"
      pl={1}
    >
      <h1 className="Form-header">Войти</h1>
      <p className="Form-paragraph">
        Новый пользователь?{" "}
        <Button
          onClick={() => setPage("signup")}
          color="primary"
          className={classes.buttonAnchor}
        >
          Зарегистрируйтесь
        </Button>
      </p>
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
        <Button type="submit" className={classes.buttonSubmit}>
          Войти
        </Button>
      </form>
    </Box>
  );
};
