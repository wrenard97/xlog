import React from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

type InputProps = {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  rules?: any;
  error?: FieldError;
};

const InputProps = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, register, rules = {}, error }, ref) => {
    return (
      <div className="relative">
        <input
          className={`h-[2rem] w-[15rem] border-[1.5px] border-[#707070] p-2 pr-8 ${
            error ? "border-red-500" : ""
          }`}
          type={type}
          placeholder={placeholder}
          {...register}
          {...rules}
          ref={ref}
        />
        {error && (
          <span className="text-red-500 absolute top-2 right-2">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

export default InputProps;
