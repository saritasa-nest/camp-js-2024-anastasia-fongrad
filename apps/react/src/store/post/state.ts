import { Post } from '@js-camp/core/models/post';

/** Posts state. */
export interface PostsState {

  /** Posts list. */
  readonly posts: Post[];

  /** Error. */
  readonly error?: string;

  /** Loading. */
  readonly isLoading: boolean;
}

export const initialState: PostsState = {
  isLoading: false,
  posts: [],
};
