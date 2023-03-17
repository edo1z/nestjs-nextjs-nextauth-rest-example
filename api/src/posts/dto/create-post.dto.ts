import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'The title of the post' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'The category of the post' })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({ description: 'The content of the post' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ description: 'The author ID of the post' })
  @IsNotEmpty()
  @IsUUID()
  author: string;
}
