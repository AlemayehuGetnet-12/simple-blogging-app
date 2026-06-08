'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BlogContextType {
  // Add your blog context properties here
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogState] = useState<BlogContextType>({
    // Initialize your blog state here
  });

  return (
    <BlogContext.Provider value={blogState}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}
