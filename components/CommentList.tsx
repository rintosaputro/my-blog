import React from "react";
import CommentItem from "./CommentItem";
import { postDetailSelector } from "@/store/postDetailSlice";
import { store } from "@/store";
import { Comment, PostDetail } from "@/types";

const CommentList = () => {
  const post: PostDetail | any = postDetailSelector(store.getState());

  return (
    <>
      <h2 className="text-[18px] md:text-[21px] font-bold mt-5 md:mt-7 mb-3">
        Comments:
      </h2>
      {post.comments.length ? (
        <div className="flex flex-col gap-3">
          {post.comments.map((comment: Comment) => (
            <CommentItem {...comment} />
          ))}
        </div>
      ) : (
        <p className="text-[#5c5c5c]">No comment for this post</p>
      )}
    </>
  );
};

export default CommentList;
