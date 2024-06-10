"use client";

import PostsList from "@/app/posts-list";
import LoadingPage from "@/components/LoadingPage";
import SecuredPage from "@/components/SecuredPage";
import Navbar from "@/components/navbar";
import { fetchPosts } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <SecuredPage>
      <>
        <Navbar />
        <PostsList data={data} />
      </>
    </SecuredPage>
  );
}
