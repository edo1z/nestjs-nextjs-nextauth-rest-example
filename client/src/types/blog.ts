export interface Post {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  content: string;
  author: string;
  authorName: string;
}

export interface BlogPostProps {
  post: Post;
}
