import CommentList from "@/components/CommentList";
import PostArticle from "@/components/PostArticle";
import { Post, Comment } from "@/types";
import React, { FC } from "react";

interface PostDetailProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const req = await fetch("https://gorest.co.in/public/v2/posts/");
  const response: Post[] = await req.json();

  return response.map((post) => ({ id: post.id.toString() }));
}

const fetchTodo = async (id: string) => {
  const post = await fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
    next: { revalidate: 200 },
  });
  const comment = await fetch(
    `https://gorest.co.in/public/v2/posts/${id}/comments`,
    {
      next: { revalidate: 200 },
    }
  );

  const postJson: Post = await post.json();
  const commentJson: Comment[] = await comment.json();
  const data = { ...postJson, comments: commentJson };
  return data;
};

const PostDetail: FC<PostDetailProps> = async ({ params: { id } }) => {
  const post = await fetchTodo(id);

  return (
    <main>
      <PostArticle title={post.title} body={post.body} />
      <CommentList />
    </main>
  );
};

export default PostDetail;
