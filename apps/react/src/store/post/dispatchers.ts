import { createAsyncThunk } from '@reduxjs/toolkit';

import { PostService } from '../../api/services/postService';

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  () => PostService.fetchPosts(),
);
