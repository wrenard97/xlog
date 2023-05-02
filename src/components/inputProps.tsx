import React from "react";

type inputProps = {
  placeholder: string;
  type: string;
};

const inputProps: React.FC<inputProps> = ({ placeholder, type }) => {
  return (
    <input
      className="h-[2rem] w-[15rem] border-[1.5px] border-[#707070] p-2"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default inputProps;
