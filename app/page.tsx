import PostItem from "@/components/PostItem";

export default async function Home() {
  return (
    <main className="my-24 text-center">
      <div className="grid grid-cols-4 gap-3">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </main>
  );
}
