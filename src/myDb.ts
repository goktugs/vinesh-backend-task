// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://goktugsevgil:${process.env.MONGO_DB_KEY}@cluster0.qzpyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export async function connectToDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri, {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    });
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
