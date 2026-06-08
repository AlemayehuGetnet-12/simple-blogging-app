import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

export default async function BlogDetails({
  params,
}) {
  const { id } = await params;

  const post = posts.find(
    (post) => post.id === Number(id)
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="container">
      <h1>{post.title}</h1>

      <h3>Author: {post.author}</h3>

      <p>{post.content}</p>
    </main>
  );
}