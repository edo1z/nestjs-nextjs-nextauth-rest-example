import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { BlogPost } from '@/components/blog-post';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { Post } from '@/types/blog';
import { getPost } from '@/api/get-post';
import { ParsedUrlQuery } from 'querystring';
import { NextApiRequest, NextApiResponse } from 'next';

interface Context {
  req: NextApiRequest;
  res: NextApiResponse;
  query: ParsedUrlQuery;
}

export async function getServerSideProps({ req, res, query }: Context) {
  const session = await getServerSession(req, res, authOptions);
  const postId = parseInt(query?.id as string);
  let post = {};
  if (session && !isNaN(postId)) {
    post = await getPost(req, postId);
  }
  return {
    props: { post },
  };
}

export default function GetPost({ post }: { post: Post }) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/');
    }
  }, [loading, session, router]);

  if (router.isFallback || loading) {
    return <div>Loading...</div>;
  }

  return <BlogPost post={post} />;
}
