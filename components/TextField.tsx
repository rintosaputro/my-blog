"use client";
import React, { FC } from "react";

interface TextFieldProps {
  fullwidth?: boolean;
  label: string;
  placeholder: string;
  value: string;
  type?: "text" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({
  fullwidth = false,
  label,
  placeholder,
  value,
  type = "text",
  onChange,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 mb-6 ${fullwidth ? "w-full" : "w-fit"}`}
    >
      <label className="font-semibold text-[18px] w-fit">{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded border-2 border-[#4FBDBA] border-solid px-4 py-1 ${
          fullwidth ? "w-full" : "w-[90%] md:w-[500px]"
        }`}
      />
    </div>
  );
};

export default TextField;
