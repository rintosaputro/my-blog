import Link from "next/link";
import React from "react";

const PostItem = () => {
  return (
    <Link href="/post/1">
      <div className="p-4 shadow-lg rounded-md">
        <h2 className="text-[20px] md:text-[23px] font-bold">title</h2>
        <p className="body-post mt-2">
          Tabesco cresco dolor. Territo accusantium tres. Sed trepide utilis. Et
          denique vicinus. Creo tabernus textilis. Creator pauci armarium. Trans
          clam aestus. Voluptates suspendo totam. Dicta sit desolo. Considero
          tubineus comedo. Temporibus demo armarium. Admitto pauper tenus.
          Stipes thesaurus quo. Deporto quo cupiditate.
        </p>
      </div>
    </Link>
  );
};

export default PostItem;
