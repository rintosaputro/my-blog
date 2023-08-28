import { User } from "@/types";
import Link from "next/link";
import React from "react";

const UserItem = ({ user }: { user: User }) => {
  return (
    <Link href="/users">
      <div className="shadow-lg h-full px-2 md:px-4 py-6 md:py-8 rounded-md hover:shadow-2xl">
        <h2 className="text-center font-bold text-[18px] md:text-[20px]">
          {user.name}
        </h2>
        <ul className="flex flex-col justify-between gap-2 mt-3 md:mt-5">
          <li className="mb-2">
            <h3 className="text-[13px] md:text-[15px] text-[#4FBDBA] mb-1">
              Gender:
            </h3>
            <p className="font-medium text-[13px] md:text-[15px] text-[#5c5c5c]">
              {user.gender}
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-[13px] md:text-[15px] text-[#4FBDBA] mb-1">
              Email:
            </h3>
            <p className="font-medium text-[13px] md:text-[15px] text-[#5c5c5c]">
              {user.email}
            </p>
          </li>
          <li className="mb-2">
            <h3 className="text-[13px] md:text-[15px] text-[#4FBDBA] mb-1">
              Status:
            </h3>
            <p className="font-medium text-[13px] md:text-[15px] text-[#5c5c5c]">
              {user.status}
            </p>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default UserItem;
