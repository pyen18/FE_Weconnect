import FormField from "@/components/formField";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "@mui/material";

const RegisterPage = () => {
  const { control } = useForm();
  return (
    <>
      <p className="mb-5 text-center text-2xl font-bold">Register</p>
      <form action="" className="flex flex-col gap-4">
        <FormField
          name="fullName"
          label="Full Name"
          control={control}
          Component={TextInput}
        />
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
        <Button variant="contained">Sign up</Button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/login">Sign in instead</Link>
      </p>
    </>
  );
};

export default RegisterPage;
