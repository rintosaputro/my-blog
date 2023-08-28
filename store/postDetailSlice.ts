import { baseUrl } from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export const getPostDetail: any = createAsyncThunk(
  "posts/getPostDetail",
  async (id: number) => {
    const post = await fetch(`${baseUrl}/posts/${id}`, {
      next: { revalidate: 200 },
    });
    const postJson = await post.json();

    const comments = await fetch(`${baseUrl}/posts/${id}/comments`, {
      next: { revalidate: 200 },
    });
    const commentsJson = await comments.json();

    const data = { ...postJson, comments: commentsJson };

    return data;
  }
);

const postDetailSlice = createSlice({
  name: "postDetail",
  initialState: {
    post: null,
  },
  extraReducers: {
    [getPostDetail.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
  },
  reducers: {},
});

export const postDetailSelector = (state: RootState) => state.postDetail.post;

export default postDetailSlice.reducer;
