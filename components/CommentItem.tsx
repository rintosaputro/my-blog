import { Comment } from "@/types";
import Link from "next/link";
import React, { FC } from "react";

const CommentItem: FC<Comment> = ({ name, body }) => {
  return (
    <div className="shadow p-3 md:p-5">
      <Link
        href="/"
        className="text-[14px] md:text-[16px] text-[#4FBDBA] hover:drop-shadow-2xl w-fit block pb-2"
      >
        <h3 className="font-bold w-fit">{name}</h3>
      </Link>
      <p>{body}</p>
    </div>
  );
};

export default CommentItem;
