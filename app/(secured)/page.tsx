"use client";

import PostsList from "@/app/posts-list";
import LoadingPage from "@/components/LoadingPage";
import { useAuth } from "@/context/AuthContext";
import { fetchPosts } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        console.log(data);
        setData(data);
      } catch (error) {
        logout();
        console.error("Error fetching posts:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <>
      <PostsList data={data} />
    </>
  );
}
