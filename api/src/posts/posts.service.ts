import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { GetPostDto } from './dto/get-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return await this.prisma.post.create({
      data: createPostDto,
    });
  }

  async findAll(): Promise<GetPostDto[]> {
    const posts = await this.prisma.post.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    const postsDto: GetPostDto[] = [];
    posts.map((post) => {
      const authorName = post.user.name;
      delete post.user;
      const postDto: GetPostDto = { ...post, authorName };
      postsDto.push(postDto);
    });
    return postsDto;
  }

  async findOne(id: number): Promise<GetPostDto> {
    const post = await this.prisma.post.findUnique({
      where: { id: id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    const authorName = post.user.name;
    delete post.user;
    return { ...post, authorName };
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id: id },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({
      where: { id: id },
    });
  }
}
