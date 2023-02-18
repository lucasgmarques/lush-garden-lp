import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogposts";

export default function Blog() {
  return (
    <section className="container px-4 py-8 lg:py-[120px] mx-auto">
      <h2 className="mb-10 text-2xl text-center text-green-900 lg:mb-8 md:text-4xl font-latoRegular lg:text-4xl">
        Interesting blog to read
      </h2>
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
