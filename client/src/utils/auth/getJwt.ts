import type { NextApiRequest } from 'next';
import { getToken, encode } from 'next-auth/jwt';
import { ApiError } from '@/errors/apiError';

export async function getJwt(req: NextApiRequest): Promise<string> {
  const token = await getToken({ req });
  const secret: string = process.env.NEXTAUTH_SECRET ?? '';
  if (!token || secret === '') throw new ApiError(401, 'jwt is none');
  return await encode({ token, secret });
}
