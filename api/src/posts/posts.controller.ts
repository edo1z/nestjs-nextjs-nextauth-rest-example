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
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'The posts have been successfully retrieved.',
    type: PostEntity,
    isArray: true,
  })
  findAll(@Req() request: CustomRequest) {
    console.log(request?.user);
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The post has been successfully retrieved.',
    type: PostEntity,
  })
  findOne(@Param('id') id: string, @Req() request: CustomRequest) {
    console.log(request?.user);
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The post has been successfully updated.',
    type: PostEntity,
  })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The post has been successfully removed.',
    type: PostEntity,
  })
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
