import type { NextApiRequest, NextApiResponse } from 'next';
import { getJwt } from '@/utils/auth/getJwt';
import { ApiError } from '@/errors/apiError';

async function getLatestPosts(token: string) {
  const baseurl = process.env.API_URL ?? '';
  const url = `${baseurl}/posts`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const error = await res.json();
    const message = error.message || res.statusText;
    throw new ApiError(res.status, message);
  }
  return await res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
  try {
    const token = await getJwt(req);
    const posts = await getLatestPosts(token);
    return res.status(200).json(posts);
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ message: 'An error occurred while fetching posts.' });
    }
  }
}
