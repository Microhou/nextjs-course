"use client";

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";
import useQueryPostList from "@/hooks/useQueryPostList";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    content: "Content 1",
    createdAt: 0,
  },
];

const PostList = () => {
  const { data, isLoading, error } = useQueryPostList();
  const { posts = [], totalPages } = data || {};
  return (
    <div className="mt-8">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading posts.</p>}
      {posts.length === 0 && <p>No posts available.</p>}
      {posts?.map((post: Post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <Post post={post} />
        </Link>
      ))}
      <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default PostList;
