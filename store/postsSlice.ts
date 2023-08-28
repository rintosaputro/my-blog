import { Post } from "@/types";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";

export const getPosts: any = createAsyncThunk("posts/getPosts", async () => {
  const req = await fetch("https://gorest.co.in/public/v2/posts");
  const response = await req.json();
  return response;
});

const postsEntity = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});

const postsSlice = createSlice({
  name: "post",
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
