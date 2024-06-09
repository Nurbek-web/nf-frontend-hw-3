import PostsList from "@/components/posts-list";
import { fetchPosts } from "@/lib/api";

export default async function Home() {
  const data = await fetchPosts("/posts");

  console.log(data);

  return (
    <>
      <PostsList data={data} />
    </>
  );
}
