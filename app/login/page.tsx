"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginUser } from "@lib/features/users/userSlice";
import User from "@interfaces/user";
import createHash from "@utils/hashing";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@lib/store";
function page() {
  const [credentials, setCredentials] = useState({} as User);
  const user = useSelector((state: RootState) => state.user.loggedInUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const login = async () => {
    let res = await dispatch(
      loginUser({
        ...credentials,
        password: createHash(credentials.password),
      } as User)
    );
    if (loginUser.fulfilled.match(res)) {
      router.push("/profile");
      localStorage.setItem("userId", res.payload._id);
    }
  };

  return (
    <>
      <TextField
        className="input_container"
        label="UserName"
        variant="standard"
        color="secondary"
        onChange={(e) => {
          setCredentials({ ...credentials, userName: e.target.value });
        }}
      />
      <br />
      <TextField
        className="input_container"
        label="Password"
        variant="standard"
        type="password"
        color="secondary"
        onChange={(e) => {
          setCredentials({ ...credentials, password: e.target.value });
        }}
      />
      <br />
      <Button
        color="secondary"
        size="medium"
        variant="contained"
        onClick={login}
      >
        Login
      </Button>
    </>
  );
}

export default page;
