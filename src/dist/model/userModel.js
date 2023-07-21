"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const donateModel = new mongoose_1.default.Schema({
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
            type: mongoose_1.default.Types.ObjectId,
            ref: "donate",
        },
    ],
}, { timestamps: true });
exports.default = mongoose_1.default.model("users", donateModel);
