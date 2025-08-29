"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";

const BlogMain = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const categories = [
        "All",
        "Branding",
        "Photoshoot",
        "Media Promotions",
        "Digital Marketing",
        "Website Development",
        "YouTube Content Creation",
    ];

    const blogPosts = [
        // Branding
        { title: "Impactful Motion Graphics", category: "Branding", image: "/blog/post-1.jpg", link: "https://example.com/blog1" },
        { title: "Storytelling in Branding", category: "Branding", image: "/blog/post-2.jpg", link: "https://example.com/blog2" },
        { title: "Brand Identity Tips", category: "Branding", image: "/blog/post-3.jpg", link: "https://example.com/blog3" },

        // Photoshoot
        { title: "Mastering Portrait Photography", category: "Photoshoot", image: "/blog/post-4.jpg", link: "https://example.com/blog4" },
        { title: "Creative Lighting Techniques", category: "Photoshoot", image: "/blog/post-5.jpg", link: "https://example.com/blog5" },
        { title: "Editing Like a Pro", category: "Photoshoot", image: "/blog/post-6.jpg", link: "https://example.com/blog6" },

        // Media Promotions
        { title: "Social Media Growth Hacks", category: "Media Promotions", image: "/blog/post-1.jpg", link: "https://example.com/blog7" },
        { title: "Creating Viral Campaigns", category: "Media Promotions", image: "/blog/post-2.jpg", link: "https://example.com/blog8" },
        { title: "Boosting Engagement Organically", category: "Media Promotions", image: "/blog/post-3.jpg", link: "https://example.com/blog9" },

        // Digital Marketing
        { title: "SEO Basics for Beginners", category: "Digital Marketing", image: "/blog/post-4.jpg", link: "https://example.com/blog10" },
        { title: "Email Marketing Strategies", category: "Digital Marketing", image: "/blog/post-5.jpg", link: "https://example.com/blog11" },
        { title: "PPC Advertising Tips", category: "Digital Marketing", image: "/blog/post-6.jpg", link: "https://example.com/blog12" },

        // Website Development
        { title: "Responsive Design Essentials", category: "Website Development", image: "/blog/post-1.jpg", link: "https://example.com/blog13" },
        { title: "Optimizing Website Speed", category: "Website Development", image: "/blog/post-2.jpg", link: "https://example.com/blog14" },
        { title: "Top UX Practices", category: "Website Development", image: "/blog/post-3.jpg", link: "https://example.com/blog15" },

        // YouTube Content Creation
        { title: "Creating Engaging YouTube Videos", category: "YouTube Content Creation", image: "/blog/post-4.jpg", link: "https://example.com/blog16" },
        { title: "Growing Your YouTube Channel", category: "YouTube Content Creation", image: "/blog/post-5.jpg", link: "https://example.com/blog17" },
        { title: "Video Editing Tips for YouTube", category: "YouTube Content Creation", image: "/blog/post-6.jpg", link: "https://example.com/blog18" },

        // Extra posts for variety
        { title: "Branding Trends 2025", category: "Branding", image: "/blog/post-1.jpg", link: "https://example.com/blog19" },
        { title: "Advanced Photography Techniques", category: "Photoshoot", image: "/blog/post-2.jpg", link: "https://example.com/blog20" },
    ];



    // Filtered blogs by category
    const filteredBlogs =
        selectedCategory === "All"
            ? blogPosts
            : blogPosts.filter((blog) => blog.category === selectedCategory);

    // Pagination logic
    const indexOfLast = currentPage * blogsPerPage;
    const indexOfFirst = indexOfLast - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    return (
        <section className="py-30 max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                setCurrentPage(1);
                            }}
                            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${selectedCategory === cat
                                    ? "bg-lime-400 text-black"
                                    : "bg-gray-800 text-white hover:bg-lime-400 hover:text-black"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentBlogs.map((post, index) => (
                        <BlogCard key={index} post={post} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-10 gap-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-lime-400"
                        >
                            ←
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-4 py-2 rounded font-medium ${currentPage === i + 1
                                        ? "bg-lime-400 text-black"
                                        : "bg-gray-800 text-white hover:bg-lime-400 hover:text-black"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                            }
                            className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-lime-400"
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogMain;
