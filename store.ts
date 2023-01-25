import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./redux/apiSlice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
