import { Post } from '@js-camp/core/models/post';
import { PostDto } from '@js-camp/core/dtos/postDto';

export namespace PostMapper {

  /**
   * Maps dto to model.
   * @param dto Post dto.
   */
  export function fromDto(dto: PostDto): Post {
    return {
      id: dto.id,
      userId: dto.userId,
      title: dto.title,
      body: dto.body,
    };
  }
}
