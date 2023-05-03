import mongoose from "mongoose";

// Connect Mongodb Database
export const Connectdb = async () => {
  const databaseUri = process.env.DB_URI;
  await mongoose.connect(databaseUri);
};
