import Link from "next/link";
import React, { FC } from "react";

interface FloatButtonProps {
  children: React.ReactNode | string;
}

const FloatButton: FC<FloatButtonProps> = ({ children }) => {
  return (
    <Link
      href="/users/create"
      className="fixed bottom-8 right-4 rounded-full bg-[#4FBDBA] px-3 py-2 font-semibold text-white shadow-lg hover:bg-cyan-600"
    >
      {children}
    </Link>
  );
};

export default FloatButton;
