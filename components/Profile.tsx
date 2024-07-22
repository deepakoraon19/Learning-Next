"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@lib/store";
import { fetchUser } from "@lib/features/users/userSlice";
function Profile() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(
    (state: RootState) => state.user.loggedInUser
  );

  return (
    <>
      <h1>Hi {loggedInUser.firstName} !</h1>
    </>
  );
}

export default Profile;
