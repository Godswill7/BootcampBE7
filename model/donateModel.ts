import express from "express";
import mongoose from "mongoose";

interface iDonate {
    userID?: string;
    password?: string
category?: string;
ammount?: number;
  user?: {};
}

interface iDonateData extends iDonate, mongoose.Document {}

const donateModel = new mongoose.Schema(
  {
    userID: {
        type: String,
    },
    password: {
        type: String,
    },
category: {
    type: String,
},
ammount: {
    type: Number,
},
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true },
);

export default mongoose.model<iDonateData>("posts", donateModel);
