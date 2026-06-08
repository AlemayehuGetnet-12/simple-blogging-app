'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface BlogPost {
  title: string;
  author: string;
  content: string;
}

interface BlogFormProps {
  addPost: (post: BlogPost) => void;
}

export default function BlogForm({ addPost }: BlogFormProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validation
    if (!title.trim() || !author.trim() || !content.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (title.trim().length < 3) {
      setError('Title must be at least 3 characters long');
      return;
    }

    if (content.trim().length < 10) {
      setError('Content must be at least 10 characters long');
      return;
    }

    try {
      setIsSubmitting(true);
      addPost({
        title: title.trim(),
        author: author.trim(),
        content: content.trim(),
      });

      setTitle('');
      setAuthor('');
      setContent('');
      setSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Create a New Blog Post</h2>

        {error && <div className="form-error">{error}</div>}
        {success && (
          <div className="form-success">
            Blog post published successfully! 🎉
          </div>
        )}

        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter an engaging title..."
            value={title}
            onChange={handleTitleChange}
            className="form-input"
            maxLength={100}
          />
          <span className="form-char-count">{title.length}/100</span>
        </div>

        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Author Name
          </label>
          <input
            id="author"
            type="text"
            placeholder="Your name"
            value={author}
            onChange={handleAuthorChange}
            className="form-input"
            maxLength={50}
          />
          <span className="form-char-count">{author.length}/50</span>
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Blog Content
          </label>
          <textarea
            id="content"
            rows={8}
            placeholder="Write your blog post here... (minimum 10 characters)"
            value={content}
            onChange={handleContentChange}
            className="form-textarea"
            maxLength={5000}
          />
          <span className="form-char-count">{content.length}/5000</span>
        </div>

        <button
          type="submit"
          className="form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Publishing...' : 'Publish Post'}
        </button>
      </form>
    </div>
  );
}
