import BlogDetails from "@/components/ui/BlogDetails";

interface BlogParams {
    params: {
        blogId: string
    }
}

const BlogDetailPage = async ({ params }: BlogParams) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
        cache: 'no-store'
    })
    const blog = await res.json()
    return (
        <div className="my-10">
            <BlogDetails blog={blog} />
        </div>
    );
};

export default BlogDetailPage;