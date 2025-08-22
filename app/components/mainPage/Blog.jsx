"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


const Blog = () => {

      const blogs = [
    {
      id: 1,
      title: "How to Create Impactful Motion Graphics",
      image: "/blog/post-1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "The Art of Storytelling Through Branding",
      image: "/blog/post-2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Maximizing Creativity with Adobe Illustrator",
      image: "/blog/post-3.jpg",
      link: "#",
    },
  ];

  return (
      <section className="max-w-7xl mx-auto py-20 px-6 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-green-400 text-md font-semibold uppercase tracking-wide mb-3">
          <span className="">✱</span> Latest Blog
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-snug">
          Insights, trend{" "}
          <span className="text-green-400">and inspiration</span> in design
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-2xl overflow-hidden  shadow-lg group"
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-black dark:text-white text-lg font-semibold mb-4">
                {blog.title}
              </h3>
              <a
                href={blog.link}
                className="flex items-center gap-2 text-green-400 font-semibold hover:underline"
              >
                Read More <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog



