import "./globals.css";
// import { BlogProvider } from "./context/BlogContext";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Blog App",
  description: "Simple Blogging App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <BlogProvider> */}
          <Navbar />
          {children}
        {/* </BlogProvider> */}
      </body>
    </html>
  );
}
