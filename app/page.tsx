"use client";

import Feed from "@components/Feed";
import { fetchUser } from "@lib/features/users/userSlice";
import { RootState } from "@lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.loggedInUser);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) dispatch(fetchUser(userId));
  }, []);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI-Powered</span>
      </h1>
      {user._id && user._id.length > 0 ? <Feed></Feed> : <></>}
    </section>
  );
}

export default Home;
