import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: Boolean, required: true },
  phoneNumber: { type: Number, require: true },
  email: { type: String, default: "" },
  bio: { type: String, default: "" },
  createdOn: { type: Date, default: Date.now(), required: true },
  lastUpdatedOn: { type: Date, required: true },
  lastLoggedIn: { type: Date, required: true },
  profilePic: { type: String, default: "" },
});

const User = models.User || model("User", userSchema);

export default User;
