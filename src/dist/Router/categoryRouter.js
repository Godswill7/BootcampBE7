"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryController_1 = require("../controller/categoryController");
// import { upload } from "../config/multer";
const router = express_1.default.Router();
// router.route("/sign-in").post(signInUser);s
// router.route("/register").post(upload, createUser);
router.route("/register").post(categoryController_1.createcategory);
router.route("/").get(categoryController_1.viewcategory);
router.route("/:categoryID/detail-one").get(categoryController_1.ViewOnecategory);
router.route("/:categoryID/update-one").patch(categoryController_1.updateOnecategory);
router.route("/:categoryID/delete-one").delete(categoryController_1.deleteOnecategory);
exports.default = router;
