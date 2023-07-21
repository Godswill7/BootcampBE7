"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
// import { upload } from "../config/multer";
const router = express_1.default.Router();
router.route("/sign-in").post(userController_1.signInUser);
// router.route("/register").post(upload, createUser);
router.route("/register").post(userController_1.createUser);
router.route("/users").get(userController_1.viewUser);
router.route("/:userID/detail-one").get(userController_1.ViewOneUser);
router.route("/:userID/update-one").patch(userController_1.updateOneUser);
router.route("/:userID/delete-one").delete(userController_1.deleteOneUser);
exports.default = router;
