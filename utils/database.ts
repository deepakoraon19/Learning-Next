import mongoose from "mongoose";
let isConnected = false;
export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongoose is lalready connected");
    return;
  }

  try {
    const url = process.env.DB_URL ?? "";
    console.log("URL : ",url)
    mongoose.connect(url);
    isConnected = true;
  } catch (error) {
    console.log("Connection failed ", error);
  }
};
