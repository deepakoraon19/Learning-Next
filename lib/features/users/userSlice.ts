import User from "@interfaces/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import { checkCredentials, getUserInfo, saveUser } from "@services/userService";

const initialState = { loggedInUser: {} as User, isLoading: false };

export const fetchUser = createAsyncThunk("fetchUser", async (user: string) => {
  let res = await getUserInfo(user);
  return res;
});

export const addUser = createAsyncThunk("addUser", async (user: User) => {
  let res = await saveUser(user);
  return res;
});

export const loginUser = createAsyncThunk("loginUser", async (user: User) => {
  let res = await checkCredentials(user);
  return res;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state, action) => {
      state.loggedInUser = {};
    },
  },
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

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loggedInUser = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { logOutUser } = userSlice.actions;
