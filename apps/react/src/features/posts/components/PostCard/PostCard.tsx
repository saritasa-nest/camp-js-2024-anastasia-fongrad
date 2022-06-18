import { memo, FC } from 'react';
import { Post } from '@js-camp/core/models/post';

interface Props {

  /** Post. */
  readonly post: Post;
}

/** Card with post data. */
const PostCardComponent: FC<Props> = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <span>{post.body}</span>
  </div>
);

export const PostCard = memo(PostCardComponent);
