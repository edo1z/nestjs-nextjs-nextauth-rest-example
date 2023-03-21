import { NextApiRequest, NextApiResponse } from 'next';
import createPost from './create';
import updatePost from './update';
import deletePost from './delete';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    createPost(req, res);
  } else if (req.method === 'PUT') {
    updatePost(req, res);
  } else if (req.method === 'DELETE') {
    deletePost(req, res);
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
