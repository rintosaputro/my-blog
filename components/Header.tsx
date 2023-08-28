import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-[#4FBDBA] flex justify-center gap-4">
      <Link href={"/"} className="p-3 bg-white rounded-lg">
        Home
      </Link>
      <Link href="/users" className="p-3 bg-white rounded-lg">
        Users
      </Link>
    </header>
  );
};

export default Header;
