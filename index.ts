import express, { Application } from "express";
import dotenv from "dotenv";
import {db }from "./config/db"
import { mainApp } from "./mainApp";
dotenv.config();

const readPort = 2903;
// const port: number = process.env.MY_PORT

const app: Application = express();
mainApp(app)
app.listen(readPort,()=>{
     db()
    console.log("server is up")
})

// process.on("uncaughtException", (error: Error) => {
//   console.log("Shutting down server because of uncaughtException Error");
//   console.log(error);

//   process.exit(1);
// });

// process.on("unhandledRejection", (reason: any) => {
//   console.log("Shutting down server because of unhandledRejection Error");
//   console.log(reason);

//   server.close(() => {
//     process.exit(1);
//   });
// });
