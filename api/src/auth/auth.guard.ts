import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { decode } from 'next-auth/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers?.authorization;
    if (!authorization) return false;
    const token = authorization.split(' ')[1];
    if (!token) return false;
    const secret = process.env.NEXTAUTH_SECRET ?? '';
    if (!secret) return false;
    try {
      const decoded = await decode({ token, secret });
      if (!decoded) return false;
      request.user = decoded;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
