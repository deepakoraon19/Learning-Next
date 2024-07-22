import React from "react";
import TextField from "@mui/material/TextField";

import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState, useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import imageCompression from "browser-image-compression";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "@lib/features/posts/postSlice";
import { RootState } from "@lib/store";

function page() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
    const user = useSelector((state : RootState) => state.user.loggedInUser)
    const [caption, setCaption] = useState("")
  async function uploadProfilePic(event) {
    const imageFile = event.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      let base64 = await imageCompression.getDataUrlFromFile(compressedFile);
      let res = await dispatch(addPost({ userId : user.userName, image: base64, caption:  }));
      if (addPost.fulfilled.match(res)) {
        console.log("Uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Stack>
        <IconButton onClick={() => inputRef.current.click()}>
          <Avatar
            alt="Remy Sharp"
            src={user.profilePic}
            sx={{ width: "5rem", height: "5rem" }}
          />
        </IconButton>
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputRef}
          accept="image/*"
          onChange={(e) => {
            uploadProfilePic(e);
          }}
        ></input>
      </Stack>
      <TextField id="outlined-basic" label="Caption" variant="outlined" />
    </>
  );
}

export default page;
