import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import postDetailReducer from "./postDetailSlice";
import usersReducer from "./usersSlice";
import searchReducer from "./searchSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    postDetail: postDetailReducer,
    users: usersReducer,
    search: searchReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
