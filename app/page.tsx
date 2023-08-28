import PostList from "@/components/PostList";
import { store } from "@/store";
import { getPosts } from "@/store/postSlice";

export default async function Home() {
  await store.dispatch(getPosts());

  return (
    <main>
      <PostList />
    </main>
  );
}
