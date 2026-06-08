"use client";
import { useState } from "react";

export default function BlogForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!title || !author || !content) {
      alert("Fill all fields");
      return;
    }

    addPost({
      title,
      author,
      content,
    });

    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <textarea
        rows="5"
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">
        Publish Post
      </button>
    </form>
  );
}