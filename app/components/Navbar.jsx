import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Blog App</h2>

      <div>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}