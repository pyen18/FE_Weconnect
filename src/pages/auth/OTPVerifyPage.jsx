import FormField from "@/components/formField";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "@mui/material";
import OTPInput from "@/components/FormInputs/OTPInput";
const OTPVerifyPage = () => {
  const { control } = useForm();
  return (
    <>
      <p className="mb-5 text-center text-2xl font-bold">
        Two-Step Verification
      </p>
      <form action="" className="flex flex-col gap-4">
        <FormField
          name="otp"
          label="Type your 6 digit security code"
          control={control}
          Component={OTPInput}
        />
        <Button variant="contained">Verify my account </Button>
      </form>
      <p className="mt-4">
        Didn't get the code? <Link to="/login">Resend</Link>
      </p>
    </>
  );
};

export default OTPVerifyPage;
