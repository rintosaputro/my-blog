import { Post } from "@/types";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { baseUrl } from "@/api";

export const getPosts: any = createAsyncThunk("posts/getPosts", async () => {
  const req = await fetch(`${baseUrl}/posts`);
  const response = await req.json();
  return response;
});

const postsEntity = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});

const postsSlice = createSlice({
  name: "posts",
  initialState: postsEntity.getInitialState(),
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      postsEntity.setAll(state, action.payload);
    },
  },
  reducers: {},
});

export const postSelectors = postsEntity.getSelectors(
  (state: RootState) => state.posts
);
export default postsSlice.reducer;
