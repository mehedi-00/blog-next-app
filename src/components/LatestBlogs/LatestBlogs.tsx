import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-4xl text-center my-8">Welcome to the <span className="text-accent">LatestBlogs</span> </h1>
            <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
                <i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
            </p>
            {/* 2 clomn */}
            <div className="grid grid-cols-2 gap-4 my-8">
                {
                    blogs.slice(0, 2).map((blog) => <LatestBlogCard key={blog.id} blog={blog} />)
                }
            </div>
            {/* 3 colum */}
            <div className="grid grid-cols-3 gap-4 my-8">
                {
                    blogs.slice(2, 5).map((blog) => <BlogCard key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default LatestBlogs;