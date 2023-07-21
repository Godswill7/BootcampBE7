import express, { Router } from "express";
import { ViewOnecategory, createcategory, deleteOnecategory, updateOnecategory, viewcategory } from "../controller/categoryController";
// import { upload } from "../config/multer";

const router: Router = express.Router();

// router.route("/sign-in").post(signInUser);s
// router.route("/register").post(upload, createUser);
router.route("/register").post( createcategory);
router.route("/").get(viewcategory);
router.route("/:categoryID/detail-one").get(ViewOnecategory);
router.route("/:categoryID/update-one").patch(updateOnecategory);
router.route("/:categoryID/delete-one").delete(deleteOnecategory);

export default router;
