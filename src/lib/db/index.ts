import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDB = async () => {
    console.log('MONGODB_URI: ', process.env.MONGODB_URI)
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    // console.log(database)
    throw new Error("MONGODB_URI is missing...");
  }

  cached.promise =
    cached.promise ||
    (await mongoose.connect(MONGODB_URI, {
      dbName: "learning",
      bufferCommands: false,
    }));

  cached.conn = await cached.promise;

  return cached.conn;
};
