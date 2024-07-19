import User from "@interfaces/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import { getUserInfo, saveUser } from "@services/userService";

const initialState = { loggedInUser: {}, isLoading: false };

export const fetchUser = createAsyncThunk("fetchUser", async (user: string) => {
  let res = await getUserInfo(user);
  return res;
});

export const addUser = createAsyncThunk("addUser", async (user: User) => {
  let res = await saveUser(user);
  return res;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loggedInUser = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loggedInUser = action.payload;
      state.isLoading = false;
    });

    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default userSlice.reducer;
