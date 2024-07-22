import { Post } from "@interfaces/post";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
  "Access-Control-Allow-Credentials": true,
};

const uri = process.env.NEXT_PUBLIC_API_URL;

export const savePost = async (post: Post) => {
  let res = await axios.post(`${uri}/post`, post, {
    headers: headers,
  });
  return res.data.post;
};

export const getPosts = async (userId: string) => {
  let res = await axios.get(`${uri}/post`, {
    headers: headers,
    params: {
      id: userId,
    },
  });
  return res.data.posts;
};
