// pages/blog/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { BlogPost } from '../../components/blog-post';

interface BlogPostPageProps {
  title: string;
  content: string;
  createdAt: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({
  title,
  content,
  createdAt,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <BlogPost title={title} content={content} createdAt={createdAt} />;
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // ここでブログ記事のIDを取得し、pathsを生成します。
  // 実際のデータ取得ロジックは、APIやデータベースに応じて実装してください。
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // ここでブログ記事のデータを取得します。
  // 実際のデータ取得ロジックは、APIやデータベースに応じて実装してください。
  const blogPostData = {
    title: `Sample Blog Post ${params?.id}`,
    content: 'This is a sample blog post...',
    createdAt: '2023-03-16',
  };

  return { props: blogPostData, revalidate: 10 };
};
