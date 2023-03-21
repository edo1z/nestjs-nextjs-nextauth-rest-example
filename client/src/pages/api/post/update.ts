import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { ApiError } from '@/errors/apiError';

interface PostData {
  title: string;
  content: string;
  category: string;
}

export default async function updatePost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const { title, content, category } = req.body as PostData;
    const token = await getToken({ req, raw: true });
    const baseurl = process.env.API_URL ?? '';
    const url = `${baseurl}/posts/${id}`;
    const fetchOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content, category }),
    };
    const fetchRes = await fetch(url, fetchOptions);
    if (!fetchRes.ok) {
      const error = await fetchRes.json();
      const message = error.message || fetchRes.statusText;
      throw new ApiError(fetchRes.status, message);
    }
    const responseData = await fetchRes.json();
    res.status(200).json(responseData);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}
