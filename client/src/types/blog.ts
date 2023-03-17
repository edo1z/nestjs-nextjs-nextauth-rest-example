export interface Post {
  id: number;
  title: string;
  createdAt: string;
}

export interface BlogPostCardProps {
  post: Post;
}
