"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// import dotenv from "dotenv";
// dotenv.config();
const URL = "mongodb://localhost:27017/";
const db = () => {
    try {
        mongoose_1.default.connect(URL).then(() => {
            console.log("");
            console.log("connected");
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.db = db;
