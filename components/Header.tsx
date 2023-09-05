import React from "react";
import ButtonLink from "./ButtonLink";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 bg-[#4FBDBA] flex justify-center gap-4">
      <Link href={"/"} className="p-3 bg-white rounded-lg">
        Home
      </Link>
      <ButtonLink href="/users" className="p-3 bg-white rounded-lg">
        Users
      </ButtonLink>
    </header>
  );
};

export default Header;
