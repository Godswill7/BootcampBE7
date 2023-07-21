"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const donateController_1 = require("../controller/donateController");
// import { upload } from "../config/multer";
const router = express_1.default.Router();
// router.route("/sign-in").post(signInUser);s
// router.route("/register").post(upload, createUser);
router.route("/register").post(donateController_1.createDonation);
router.route("/").get(donateController_1.viewDonation);
router.route("/:donationID/detail-one").get(donateController_1.ViewOneDonation);
router.route("/:donationID/update-one").patch(donateController_1.updateOneDonation);
router.route("/:donationID/delete-one").delete(donateController_1.deleteOneDonation);
exports.default = router;
