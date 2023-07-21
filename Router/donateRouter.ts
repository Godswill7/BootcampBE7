import express, { Router } from "express";
import {
    ViewOneDonation, createDonation, deleteOneDonation, updateOneDonation, viewDonation,
} from "../controller/donateController";
// import { upload } from "../config/multer";

const router: Router = express.Router();

// router.route("/sign-in").post(signInUser);s
// router.route("/register").post(upload, createUser);
router.route("/register").post( createDonation);
router.route("/").get(viewDonation);
router.route("/:donationID/detail-one").get(ViewOneDonation);
router.route("/:donationID/update-one").patch(updateOneDonation);
router.route("/:donationID/delete-one").delete(deleteOneDonation);

export default router;
