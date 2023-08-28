import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import postDetailReducer from "./postDetailSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    postDetail: postDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
