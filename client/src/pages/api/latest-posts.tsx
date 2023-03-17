import type { NextApiRequest, NextApiResponse } from 'next';

// 仮のデータベースから投稿を取得する関数
async function getLatestPosts(userId: number) {
  // ここでデータベースから最新の10件の投稿を取得する処理を実装します。
  // この例では、仮のデータを返します。
  const posts = [
    { id: 1, title: 'Post 1', content: 'This is post 1 content.' },
    { id: 2, title: 'Post 2', content: 'This is post 2 content.' },
    // ...
  ];
  return posts;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === 'GET') {
    const userId = parseInt(query.userId as string);

    try {
      const posts = await getLatestPosts(userId);
      res.status(200).json(posts);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'An error occurred while fetching posts.' });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
