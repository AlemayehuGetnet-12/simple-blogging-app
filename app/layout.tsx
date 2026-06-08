import "./globals.css";
import { ReactNode } from "react";

import Navbar from "../components/Navbar";
import { BlogProvider } from "./providers";

export const metadata = {
  title: "Blog App",
  description: "Simple Blogging App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BlogProvider>
          <Navbar />
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}
