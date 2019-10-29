import React from "react";
import { LoginForm } from "./LoginForm.js";
import logo from "../assets/img/logo.png";
import "../assets/css/Form.css";

const LogoContainer = () => (
  <div className="Logo-container">
    <img src={logo} className="Login-logo" alt="logo" />
  </div>
);

export const Login = ({ setPage }) => (
  <div className="Login-wrapper">
    <LogoContainer />
    <LoginForm setPage={setPage} />
  </div>
);
