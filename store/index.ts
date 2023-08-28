import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import postDetailReducer from "./postDetailSlice";
import usersReducer from "./usersSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    postDetail: postDetailReducer,
    users: usersReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
