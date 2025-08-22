import { TextField } from "@mui/material";
import React from "react";

const TextInput = ({ onChange, value, name, type = "text" }) => {
  return (
    <TextField name={name} value={value} onChange={onChange} type={type} />
  );
};

export default TextInput;
