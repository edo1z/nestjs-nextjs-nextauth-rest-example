import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { ApiError } from '@/errors/apiError';

interface PostData {
  title: string;
  content: string;
  category: string;
}

export default async function createPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { title, content, category } = req.body as PostData;
    const token = await getToken({ req, raw: true });
    const jwtData = await getToken({ req });
    const author = jwtData?.sub;
    const baseurl = process.env.API_URL ?? '';
    const url = `${baseurl}/posts`;
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content, category, author }),
    };
    const fetchRes = await fetch(url, fetchOptions);
    if (!fetchRes.ok) {
      const error = await fetchRes.json();
      const message = error.message || fetchRes.statusText;
      throw new ApiError(fetchRes.status, message);
    }
    const responseData = await fetchRes.json();
    res.status(200).json(responseData);
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      console.error(`status: ${error.statusCode}, message: ${error.message}`);
      res.status(error.statusCode).json({ message: error.message });
    } else {
      res.status(500).json({ message: error });
    }
  }
}
