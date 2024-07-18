import User from "@models/users.ts";
import { connectToDb } from "../../../utils/database.ts";

const handler = async (req) => {
  await connectToDb();
  let users = await User.find();
  return new Response(users.map((p) => p));
};

export { handler as GET };
