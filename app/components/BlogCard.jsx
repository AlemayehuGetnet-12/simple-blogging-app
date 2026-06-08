import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="card">
      <h2>{post.title}</h2>

      <p>
        <strong>Author:</strong> {post.author}
      </p>

      <Link href={`/blog/${post.id}`}>
        Read More
      </Link>
    </div>
  );
}