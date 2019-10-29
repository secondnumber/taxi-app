import React from "react";
import { SignupForm } from "./SignupForm.js";
import logo from "../assets/img/logo.png";
import "../assets/css/Form.css";

const LogoContainer = () => (
  <div className="Logo-container">
    <img src={logo} className="Login-logo" alt="logo" />
  </div>
);

export const Signup = ({ setPage }) => (
  <div className="Login-wrapper">
    <LogoContainer />
    <SignupForm setPage={setPage} />
  </div>
);
