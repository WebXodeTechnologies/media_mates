// BlogCard.js
const BlogCard = ({ post }) => {
    return (
        <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden bg-gray-900 
                 transition-transform duration-500 
                 hover:scale-105 hover:rotate-1 
                 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
        >
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{post.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{post.category}</p>
            </div>
        </a>
    );
};

export default BlogCard;
