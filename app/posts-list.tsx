"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddPostForm from "@/components/add-post-form";
import EditPostForm from "@/components/edit-post-form";

export default function PostsList({ data }: any) {
  const [posts, setPosts] = useState(data.posts);
  const [editingPost, setEditingPost] = useState(null);

  const handleDelete = (postId: any) => {
    setPosts((prevPosts: any) =>
      prevPosts.filter((post: any) => post.id !== postId)
    );
  };

  const handleAddPost = (newPost: any) => {
    setPosts((prevPosts: any) => [newPost, ...prevPosts]);
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
  };

  const handleUpdatePost = (updatedPost: any) => {
    setPosts((prevPosts: any) =>
      prevPosts.map((post: any) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
    setEditingPost(null);
  };

  return (
    <div>
      <AddPostForm onAddPost={handleAddPost} />
      {editingPost && (
        <EditPostForm
          post={editingPost}
          onUpdatePost={handleUpdatePost}
          onCancel={() => setEditingPost(null)}
        />
      )}
      <div className="px-4 py-6 md:px-6 lg:py-16 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      <Link href={`/posts/${post.id}`} prefetch={false}>
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {post.tags.map((tag: any, index: any) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <HeartIcon className="w-4 h-4 fill-red-500" />
                      <span>{post.reactions.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsDownIcon className="w-4 h-4 fill-blue-500" />
                      <span>{post.reactions.dislikes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <EyeIcon className="w-4 h-4 fill-green-500" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
                <Button
                  className="mt-2 w-full"
                  variant="secondary"
                  onClick={() => handleEditPost(post)}
                >
                  Edit
                </Button>
                <Button
                  className="mt-2 w-full"
                  variant="destructive"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ThumbsDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}
