import PostItem from "@/components/PostItem";

export default async function Home() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-3 md:gap-7">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </main>
  );
}
