import mongoose from "mongoose";

export interface iDonate {
  userName?: string;
  email?: string;
  password?: string;
  donate?: []
}

interface iDonateData extends iDonate, mongoose.Document {}

const donateModel = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    donate: [
        {
          type: mongoose.Types.ObjectId,
          ref: "donate",
        },
      ],
  },
  { timestamps: true },
);

export default mongoose.model<iDonateData>("users", donateModel);
