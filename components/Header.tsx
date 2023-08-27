import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-[#4FBDBA]">
      <Link href={"/"} className="p-3 bg-white rounded-lg">
        home
      </Link>
    </header>
  );
};

export default Header;
