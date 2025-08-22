import FormField from "@/components/formField";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "@mui/material";

const RegisterPage = () => {
  const { control } = useForm();
  return (
    <div className="flex h-screen items-center justify-center bg-[#F8F7FA]">
      <div className="h-fit w-[450px] bg-white px-8 py-10">
        <img src="/weconnect-logo.png" alt="" className="mx-auto mb-6" />
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
      </div>
    </div>
  );
};

export default RegisterPage;
