import { baseUrl } from "@/api";
import CommentList from "@/components/CommentList";
import PostArticle from "@/components/PostArticle";
import { store } from "@/store";
import { getPostDetail } from "@/store/postDetailSlice";
import { Post } from "@/types";
import React, { FC } from "react";

interface PostDetailProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const req = await fetch(`${baseUrl}/posts`);
  const response: Post[] = await req.json();

  return response.map((post) => ({ id: post.id.toString() }));
}

const PostDetail: FC<PostDetailProps> = async ({ params: { id } }) => {
  await store.dispatch(getPostDetail(id));

  return (
    <main>
      <PostArticle />
      <CommentList />
    </main>
  );
};

export default PostDetail;
