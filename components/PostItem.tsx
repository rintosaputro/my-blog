import Link from "next/link";
import React, { FC } from "react";

interface PostItemProps {
  title: string;
  body: string;
  id: number;
}

const PostItem: FC<PostItemProps> = ({ title, body, id }) => {
  return (
    <Link
      href={`/post/${id}`}
      className="p-4 shadow-lg rounded-md hover:shadow-2xl"
    >
      <h2 className="title-post text-[20px] md:text-[23px] font-bold">
        {title}
      </h2>
      <p className="body-post mt-2">{body}</p>
    </Link>
  );
};

export default PostItem;
