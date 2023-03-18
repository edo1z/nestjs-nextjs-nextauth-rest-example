import type { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';
import { ApiError } from '@/errors/apiError';

export async function getJwt(req: NextApiRequest): Promise<string> {
  const token = await getToken({ req, raw: true });
  if (!token) throw new ApiError(401, 'jwt is none');
  return token;
}
