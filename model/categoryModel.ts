import mongoose from "mongoose";

export interface iCategory {
  userID?: string;
  donate?: number;
}


interface iCategoryData extends iCategory, mongoose.Document {}

const categoryModel = new mongoose.Schema(
  {
    userID: {
      type: String,
    },
    donate: [
        {
type: String,
        },
      ],
  },
  { timestamps: true },
);

export default mongoose.model<iCategoryData>("users",categoryModel);
