import { ApiProperty } from '@nestjs/swagger';

export class GetPostDto {
  @ApiProperty({ description: 'The unique identifier of the post' })
  id: number;

  @ApiProperty({ description: 'The title of the post' })
  title: string;

  @ApiProperty({ description: 'The creation timestamp of the post' })
  createdAt: Date;

  @ApiProperty({ description: 'The last update timestamp of the post' })
  updatedAt: Date;

  @ApiProperty({ description: 'The category of the post' })
  category: string;

  @ApiProperty({ description: 'The content of the post' })
  content: string;

  @ApiProperty({ description: 'The author ID of the post' })
  author: string;

  @ApiProperty({ description: 'The author name of the post' })
  authorName: string;
}
