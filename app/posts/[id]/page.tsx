import PostDetail from "@/components/post-detail";
import { fetchPost } from "@/lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  console.log(post);
  if (post == 404) {
    return <>This post was not found (</>;
  }

  return (
    <>
      <PostDetail post={post} />
    </>
  );
}
