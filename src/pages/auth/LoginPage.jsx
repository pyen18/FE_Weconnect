import React from "react";
import FormField from "@/components/formField";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "@mui/material";

const LoginPage = () => {
  const { control } = useForm();
  
  return (
    <>
      <p className="mb-5 text-center text-2xl font-bold">Login</p>
      <form action="" className="flex flex-col gap-4">
        <FormField
          name="email"
          label="Email"
          control={control}
          Component={TextInput}
        />
        <FormField
          name="password"
          label="Password"
          control={control}
          type="password"
          Component={TextInput}
        />
        <Button variant="contained">Sign in</Button>
      </form>
      <p className="mt-4">
        New on our platform? <Link to="/register">Create an account</Link>
      </p>
    </>
  );
};

export default LoginPage;
