import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  number: number;
  title: string;
  body: string;
}

interface PostsContextType {
  posts: Post[];
}

export const PostsContext = createContext({} as PostsContextType);

interface PostsContextProvierProps {
  children: ReactNode;
}

export function PostsContextProvier({ children }: PostsContextProvierProps) {
  const [posts, setPosts] = useState([]);

  const username = "douglasrochak";
  const repo = "03-desafio-github-blog";

  async function fetchPosts(query = "") {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${repo}`
    );

    setPosts(response.data.items);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}
