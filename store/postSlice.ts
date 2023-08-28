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

const postEntity = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});

const postSlice = createSlice({
  name: "post",
  initialState: postEntity.getInitialState(),
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      postEntity.setAll(state, action.payload);
    },
  },
  reducers: {},
});

export const postSelectors = postEntity.getSelectors(
  (state: RootState) => state.posts
);
export default postSlice.reducer;
