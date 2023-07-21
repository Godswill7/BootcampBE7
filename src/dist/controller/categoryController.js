"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOnecategory = exports.ViewOnecategory = exports.updateOnecategory = exports.viewcategory = exports.createcategory = void 0;
const donateModel_1 = __importDefault(require("../model/donateModel"));
// import bcrypt from "bcrypt"
// import cloudinary from "../config/cloudinary";
const createcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category, userID } = req.body;
        const Category = yield donateModel_1.default.create({
            category,
            userID,
        });
        return res.status(201).json({
            message: "category created",
            data: Category,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to create category",
        });
    }
});
exports.createcategory = createcategory;
const viewcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Category = yield donateModel_1.default.find();
        return res.status(200).json({
            message: "viewing category",
            data: Category,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to view category",
        });
    }
});
exports.viewcategory = viewcategory;
const updateOnecategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryID } = req.params;
        const Category = yield donateModel_1.default.findByIdAndUpdate(categoryID, { new: true });
        return res.status(201).json({
            message: "updated category",
            data: Category,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to update category",
        });
    }
});
exports.updateOnecategory = updateOnecategory;
const ViewOnecategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryID } = req.params;
        const Category = yield donateModel_1.default.findById(categoryID);
        return res.status(200).json({
            message: "view one category",
            data: Category,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to view one category",
        });
    }
});
exports.ViewOnecategory = ViewOnecategory;
const deleteOnecategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryID } = req.params;
        const Category = yield donateModel_1.default.findByIdAndDelete(categoryID);
        return res.status(201).json({
            message: "category deleted",
            data: Category,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to delete category",
        });
    }
});
exports.deleteOnecategory = deleteOnecategory;
