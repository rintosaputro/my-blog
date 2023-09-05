"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ButtonLinkProps {
  children: "string" | React.ReactNode;
  href: string;
  className?: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        router.refresh();
        router.push(href);
      }}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
