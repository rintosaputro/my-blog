import React from "react";

const ButtonSubmit = ({ children }: { children: string }) => {
  return (
    <button
      type="submit"
      className="rounded bg-[#4FBDBA] px-12 py-2 mt-6 font-semibold text-white shadow-lg hover:bg-cyan-600"
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
