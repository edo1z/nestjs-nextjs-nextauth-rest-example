import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { BlogPost } from '../../components/blog-post';
import { Post } from '@/types/blog';
import { samplePosts } from '@/mock-data/sample-posts';

interface BlogPostPageProps {
  post: Post;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <BlogPost post={post} />;
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = samplePosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params?.id;
  const post = samplePosts.find((p) => p.id.toString() === postId);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return { props: { post }, revalidate: 10 };
};
