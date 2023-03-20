import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Post as PostEntity } from './entities/post.entity';
import { GetPostDto } from './dto/get-post.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CustomRequest } from '../common/requests/custom-request';

@Controller('posts')
@ApiTags('posts')
@UseGuards(AuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The post has been successfully created.',
    type: PostEntity,
  })
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'The posts have been successfully retrieved.',
    type: GetPostDto,
    isArray: true,
  })
  async findAll(@Req() request: CustomRequest) {
    console.log(request?.user);
    return await this.postsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The post has been successfully retrieved.',
    type: GetPostDto,
  })
  async findOne(@Param('id') id: string, @Req() request: CustomRequest) {
    console.log(request?.user);
    return await this.postsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: PostEntity,
  })
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The post has been successfully removed.',
    type: PostEntity,
  })
  async remove(@Param('id') id: string) {
    return await this.postsService.remove(+id);
  }
}
