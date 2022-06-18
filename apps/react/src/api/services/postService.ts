import { Post } from '@js-camp/core/models/post';
import { PostDto } from '@js-camp/core/dtos/postDto';

import { PostMapper } from '../mappers/postMapper';
import { http } from '..';

export namespace PostService {

  /** Fetches a list of posts. */
  export async function fetchPosts(): Promise<Post[]> {
    const { data } = await http.get<PostDto[]>('posts');
    return data.map(dto => PostMapper.fromDto(dto));
  }
}
