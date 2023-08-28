import { store } from "@/store";
import { postDetailSelector } from "@/store/postDetailSlice";
import { PostDetail } from "@/types";
import React from "react";

const PostArticle = () => {
  const post: PostDetail | any = postDetailSelector(store.getState());

  return (
    <article>
      <h1 className="text-[24px] md:text-[32px] font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </article>
  );
};

export default PostArticle;
