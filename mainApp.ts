import express, { Application } from "express";
import cors from "cors";
import user from "./Router/userRouter"
import donation from "./Router/donateRouter"
import category from "./Router/categoryRouter"


export const mainApp = (app: Application) => {
  app
    .use(cors())
    .use(express.json())

    .use("/api/v1/user", user)
    .use("/api/v1/donation", donation)
    .use("/api/v1/category", category)

};
