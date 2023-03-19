import { getJwt } from '@/utils/auth/getJwt';
import { ApiError } from '@/errors/apiError';
import { NextApiRequest } from 'next';

export async function getPost(req: NextApiRequest, postId: number) {
  const token = await getJwt(req);
  const baseurl = process.env.API_URL ?? '';
  const url = `${baseurl}/posts/${postId}`;
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
