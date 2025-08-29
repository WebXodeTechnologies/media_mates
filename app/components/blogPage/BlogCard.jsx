import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold mb-2">{post.title}</h3>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 font-semibold hover:underline flex items-center gap-1"
        >
          Read More <span className="text-green-400">→</span>
        </a>
      </div>
    </div>
  )
}

export default BlogCard
