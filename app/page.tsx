import PostsList from "@/app/posts-list";
import SecuredPage from "@/components/SecuredPage";
import { useAuth } from "@/context/AuthContext";
import { fetchPosts } from "@/lib/api";

export default async function Home() {
  const data = await fetchPosts("/posts");

  console.log(data);

  return (
    <>
      <SecuredPage>
        <PostsList data={data} />
      </SecuredPage>
    </>
  );
}
