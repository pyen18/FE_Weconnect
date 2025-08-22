import React from "react";
import { Controller } from "react-hook-form";

const FormField = ({ control, label, name, type, Component }) => {
  return (
    <div>
      <p className="mb-1 text-sm font-bold text-[#4B465C]">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name, control } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              type={type}
              control={control}
            />
          );
        }}
      />
    </div>
  );
};

export default FormField;
