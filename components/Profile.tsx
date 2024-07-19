"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@lib/store";
import { fetchUser } from "@lib/features/users/userSlice";
function Profile() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.data);

  const add = () => {
    const id = "66910312bd5e781258b05460";
    dispatch(fetchUser(id));
    console.log(list);
  };
  return (
    <>
      <button onClick={add}>Fetch</button>
    </>
  );
}

export default Profile;
