import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

const URL: string = "mongodb://localhost:27017/";

export const db = () => {
  try {
    mongoose.connect(URL).then(() => {
      console.log("");
      console.log("connected");
    });
  } catch (error) {
    console.log(error);
  }
};
