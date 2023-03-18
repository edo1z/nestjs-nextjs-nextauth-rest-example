import { Request } from '@nestjs/common';

export interface CustomRequest extends Request {
  user: any;
}
