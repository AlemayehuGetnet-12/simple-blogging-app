import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <main className="container">
      <h1>All Blog Posts</h1>

      <div className="posts">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </main>
  );
}