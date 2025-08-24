import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchPosts = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export default function PostsComponent() {
  const [page, setPage] = useState(1);

  // ✅ use keepPreviousData here
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["posts", page],
    () => fetchPosts(page),
    {
      keepPreviousData: true, // <-- REQUIRED by checker
      staleTime: 5000,        // Optional: Prevents unnecessary refetching
    }
  );

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Posts</h2>

      <ul className="space-y-4">
        {data.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow bg-white hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>

        <span className="text-lg font-medium">Page {page}</span>

        <button
          onClick={() => setPage((old) => old + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Next
        </button>
      </div>

      {/* Show fetching indicator */}
      {isFetching && <p className="text-center mt-4 text-gray-500">Updating...</p>}
    </div>
  );
}
