"use client";

import { RootState } from "@lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../lib/features/posts/postSlice";
import * as React from "react";
import Post from "./Post";

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const userId = useSelector((state: RootState) => state.user.loggedInUser._id);

  useEffect(() => {
    dispatch(getPost(userId));
  }, []);

  return (
    <>
      {posts.map((p) => (
        <Post
          key={p._id}
          userName={p.userId}
          captions={p.caption}
          createdOn={p.createdOn}
          image={p.image}
        ></Post>
      ))}
    </>
  );
}

export default Feed;
