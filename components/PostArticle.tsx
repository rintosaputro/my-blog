import React, { FC } from "react";

interface PostArticleProps {
  title: string;
  body: string;
}

const PostArticle: FC<PostArticleProps> = ({ title, body }) => {
  return (
    <article>
      <h1 className="text-[24px] md:text-[32px] font-bold">{title}</h1>
      <p className="mt-4">{body}</p>
    </article>
  );
};

export default PostArticle;
