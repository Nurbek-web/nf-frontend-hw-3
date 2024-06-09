import PostDetail from "@/app/posts/[id]/post-detail";
import SecuredPage from "@/components/SecuredPage";
import { fetchPost } from "@/lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  console.log(post);
  if (post == 404) {
    return <>This post was not found (</>;
  }

  return (
    <>
      <SecuredPage>
        <PostDetail post={post} />
      </SecuredPage>
    </>
  );
}
