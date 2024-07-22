import { Post } from "@interfaces/post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import { getPosts, savePost } from "@services/postService";

export const addPost = createAsyncThunk("addPost", async (post: Post) => {
  var res = await savePost(post);
  return res;
});

export const getPost = createAsyncThunk("getUsers", async (userId: string) => {
  var res = await getPosts(userId);
  return res;
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [] as Post[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts = [...state.posts, action.payload];
    });

    builder.addCase(getPost.fulfilled, (state, action) => {
      state.posts = [...action.payload];
    });
  },
});

export default postSlice.reducer;
