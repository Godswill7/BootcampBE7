"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./Router/userRouter"));
const donateRouter_1 = __importDefault(require("./Router/donateRouter"));
const categoryRouter_1 = __importDefault(require("./Router/categoryRouter"));
const mainApp = (app) => {
    app
        .use((0, cors_1.default)())
        .use(express_1.default.json())
        .use("/api/v1/user", userRouter_1.default)
        .use("/api/v1/donation", donateRouter_1.default)
        .use("/api/v1/category", categoryRouter_1.default);
};
exports.mainApp = mainApp;
