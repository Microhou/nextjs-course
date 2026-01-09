"use client";

import Post from "@/components/post";
import { useRouter } from "next/navigation";
import useQueryPost from "@/hooks/useQuertPost";

const mockPost: Post = {
  id: "1",
  title: "Post 1",
  content: "Content 1",
  createdAt: 0,
};

const Content = () => {
  const router = useRouter();
  const {
    data = {},
    isLoading,
    error,
  } = useQueryPost();
   const { post } = data;
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading post.</p>;
  }

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      <Post post={post} />
    </div>
  );
};

export default Content;
