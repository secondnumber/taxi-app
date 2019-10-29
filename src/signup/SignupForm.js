import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../shared/MaterialStyles.js";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import "../assets/css/Form.css";

export const SignupForm = ({ setPage }) => {
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
      height={480}
      mr="auto"
      pl={1}
    >
      <h1 className="Form-header">Регистрация</h1>
      <p className="Form-paragraph">
        Уже зарегистрированы?{" "}
        <Button
          onClick={() => setPage("login")}
          color="primary"
          className={classes.buttonAnchor}
        >
          Войти
        </Button>
      </p>
      <form
        onSubmit={onSubmit}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="userEmail"
          label="Адрес электронной почты *"
          placeholder="Адрес электронной почты"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="userName"
          label="Имя *"
          placeholder="Имя"
          className={classes.textFieldName}
          margin="normal"
        />
        <TextField
          id="userLastName"
          label="Фамилия *"
          placeholder="Фамилия"
          className={classes.textFieldLastName}
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
