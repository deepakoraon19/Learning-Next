import mongoose from "mongoose";
let isConnected = false;
export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongoose is already connected");
    return;
  }

  try {
    const url = process.env.DB_URL ?? "";
    console.log("Successfully connected to DB ");
    mongoose.connect(url);
    isConnected = true;
  } catch (error) {
    console.log("Connection failed ", error);
  }
};
