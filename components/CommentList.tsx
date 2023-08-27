import React from "react";
import CommentItem from "./CommentItem";

const CommentList = () => {
  return (
    <>
      <h2 className="text-[18px] md:text-[21px] font-bold mt-5 md:mt-7 mb-3">
        Comments:
      </h2>
      <div className="flex flex-col gap-3">
        {[...Array(3)].map((_item: any, index: number) => (
          <CommentItem key={index} />
        ))}
      </div>
    </>
  );
};

export default CommentList;
