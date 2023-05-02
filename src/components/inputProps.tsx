import React from "react";

type InputProps = {
  placeholder: string;
  type: string;
};

const InputProps: React.FC<InputProps> = ({ placeholder, type }) => {
  return (
    <input
      className="h-[2rem] w-[15rem] border-[1.5px] border-[#707070] p-2"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputProps;
