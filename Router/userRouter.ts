import express, { Router } from "express";
import {
  ViewOneUser,
  createUser,
  deleteOneUser,
  signInUser,
  updateOneUser,
  viewUser,
} from "../controller/userController";
// import { upload } from "../config/multer";

const router: Router = express.Router();

router.route("/sign-in").post(signInUser);
// router.route("/register").post(upload, createUser);
router.route("/register").post( createUser);
router.route("/users").get(viewUser);
router.route("/:userID/detail-one").get(ViewOneUser);
router.route("/:userID/update-one").patch(updateOneUser);
router.route("/:userID/delete-one").delete(deleteOneUser);

export default router;
