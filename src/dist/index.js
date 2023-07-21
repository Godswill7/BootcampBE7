"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const mainApp_1 = require("./mainApp");
dotenv_1.default.config();
const readPort = 2903;
// const port: number = process.env.MY_PORT
const app = (0, express_1.default)();
(0, mainApp_1.mainApp)(app);
app.listen(readPort, () => {
    (0, db_1.db)();
    console.log("server is up");
});
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
