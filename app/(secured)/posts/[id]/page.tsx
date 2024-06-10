"use client";

import { Post } from "@/@types/post";
import LoadingPage from "@/components/LoadingPage";
import PostDetail from "./post-detail";
import SecuredPage from "@/components/SecuredPage";
import { fetchPost } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null); // Use null instead of undefined
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPost(params.id);
        if (data === 404) {
          setError(true);
        } else {
          setPost(data);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [params.id]);

  if (loading) return <LoadingPage />;
  if (error) return <>This post was not found :(</>;

  // Conditional rendering to ensure post is not null
  return post ? (
    <SecuredPage>
      <PostDetail post={post} />
    </SecuredPage>
  ) : null;
}
