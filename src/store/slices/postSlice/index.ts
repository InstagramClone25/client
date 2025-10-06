import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { getPostList } from '@/store/slices/postSlice/postThunk';
import type { IPost } from '@/types/post';

interface IPostState {
  posts: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: IPostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    likePost(state, action) {
      const post = state.posts.find((post) => post.id === action.payload);
      if (!post) return;

      post.isLikedByCurrentUser = !post.isLikedByCurrentUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostList.fulfilled, (state, action) => {
      state.posts = action.payload as IPost[];
    });

    builder
      .addMatcher(isPending(getPostList), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(getPostList), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(getPostList), (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { likePost } = postSlice.actions;
export default postSlice.reducer;
