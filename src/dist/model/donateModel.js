"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const donateModel = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Types.ObjectId,
        ref: "user",
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("posts", donateModel);
