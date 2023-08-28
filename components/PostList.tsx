import React from "react";
import PostItem from "./PostItem";
import { store } from "@/store";
import { Post } from "@/types";
import { postSelectors } from "@/store/postSlice";

const PostList = async () => {
  const posts = postSelectors.selectAll(store.getState());

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-7">
      {posts.map((post: Post) => (
        <PostItem title={post.title} body={post.body} id={post.id} />
      ))}
    </div>
  );
};

export default PostList;
