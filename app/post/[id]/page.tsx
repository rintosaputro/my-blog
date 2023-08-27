import CommentList from "@/components/CommentList";
import PostArticle from "@/components/PostArticle";
import React from "react";

const PostDetail = () => {
  return (
    <main>
      <PostArticle />
      <CommentList />
    </main>
  );
};

export default PostDetail;
