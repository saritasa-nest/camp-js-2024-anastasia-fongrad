import { memo, useEffect, FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { fetchPosts } from '../../../../store/post/dispatchers';
import { selectPosts, selectIsPostsLoading } from '../../../../store/post/selectors';
import { PostCard } from '../../components/PostCard';

/** Post page component. */
const PostsPageComponent: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const isLoading = useAppSelector(selectIsPostsLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <h1>Posts</h1>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </>
  );
};

export const PostsPage = memo(PostsPageComponent);
