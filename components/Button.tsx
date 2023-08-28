import React, { FC } from "react";

interface ButtonProps {
  children: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  fullwidth?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  fullwidth = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded  px-12 py-2 mt-6 font-semibold text-white shadow-lg ${
        fullwidth ? "w-full" : "w-fit"
      }  ${
        variant === "primary"
          ? "bg-[#4FBDBA] hover:bg-cyan-600"
          : "bg-[#072227] hover:bg-slate-600"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
