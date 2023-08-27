import Link from "next/link";
import React from "react";

const CommentItem = () => {
  return (
    <div className="shadow p-3 md:p-5">
      <Link
        href="/"
        className="text-[14px] md:text-[16px] text-[#4FBDBA] hover:drop-shadow-2xl w-fit block pb-2"
      >
        <h3 className="font-bold w-fit">username</h3>
      </Link>
      <p>body comment</p>
    </div>
  );
};

export default CommentItem;
