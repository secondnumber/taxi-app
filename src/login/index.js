import React from "react";
import { LoginForm } from "./LoginForm.js";
import Box from "@material-ui/core/Box";
import logo from "./logo.png";
import "./Login.css";

const LogoContainer = () => (
  <div className="Logo-container">
    <img src={logo} className="Login-logo" alt="logo" />
  </div>
);

const FormContainer = () => (
  <Box
    component="div"
    bgcolor="primary.contrastText"
    boxShadow={3}
    borderRadius={5}
    width={500}
    height={370}
    mr="auto"
  >
    <h1 className="Form-header">Войти</h1>
    <p className="Form-paragraph">
      Новый пользователь? <a href="#">Зарегистрируйтесь</a>
    </p>
    <LoginForm />
  </Box>
);

export const Login = () => (
  <div className="Login-wrapper">
    <LogoContainer />
    <FormContainer />
  </div>
);
