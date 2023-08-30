import React from "react";
import ButtonLink from "./ButtonLink";

const Header = () => {
  return (
    <header className="p-5 bg-[#4FBDBA] flex justify-center gap-4">
      <ButtonLink href={"/"} className="p-3 bg-white rounded-lg">
        Home
      </ButtonLink>
      <ButtonLink href="/users" className="p-3 bg-white rounded-lg">
        Users
      </ButtonLink>
    </header>
  );
};

export default Header;
