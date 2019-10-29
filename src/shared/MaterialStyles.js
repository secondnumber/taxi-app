import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../assets/css/Form.css";

export const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: 10,
    width: 120,
    height: 40,
    textTransform: "none"
  },
  buttonFirst: {
    marginLeft: "65vw",
    width: 120,
    height: 40,
    textTransform: "none"
  },
  buttonSubmit: {
    marginLeft: 330,
    marginTop: 30,
    width: 120,
    height: 40,
    textTransform: "none",
    background: "linear-gradient(45deg, #FFC700 30%, #FFC700 90%)"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 50,
    width: 400
  },
  textFieldName: {
    marginLeft: 50,
    width: 190
  },
  textFieldLastName: {
    marginLeft: 10,
    width: 200
  },
  buttonAnchor: {
    textTransform: "none",
    fontSize: 16
  }
}));
