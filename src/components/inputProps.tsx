import React from "react";

type inputProps = {
  placeholder: string;
  type: string;
};

const InputProps = React.forwardRef<HTMLInputElement, inputProps>(
  ({ placeholder, type }, ref) => {
    return (
      <input
        className="h-[2rem] w-[15rem] border-[1.5px] border-[#707070] p-2"
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
    );
  }
);

export default InputProps;
