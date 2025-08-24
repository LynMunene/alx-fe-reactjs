import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Fetch function for posts
const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Cache data for 5 seconds
    cacheTime: 10000, // Keep cache alive for 10 seconds after unmount
    refetchOnWindowFocus: false, // Disable refetch on tab switch
  });

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg text-gray-600">Loading posts...</p>
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <div className="text-center text-red-500">
        <p>Error fetching posts: {error.message}</p>
        <button
          onClick={() => refetch()}
          className="bg-red-500 text-white px-4 py-2 rounded mt-3"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <ul className="space-y-4 max-h-[400px] overflow-y-auto">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="border-b border-gray-200 pb-2 hover:bg-gray-50 p-3 rounded transition"
          >
            <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
