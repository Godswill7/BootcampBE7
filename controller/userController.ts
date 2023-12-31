import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt"
// import cloudinary from "../config/cloudinary";

export const createUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { email, password, userName } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // const { public_id, secure_url } = await cloudinary.uploader.upload(
    //   req.file?.path!,
    // );

    const user = await userModel.create({
      email,
      password: hash,
      userName,
    //   avatar: secure_url,
    //   avatarID: public_id,
    });

    return res.status(201).json({
      message: "user created",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const signInUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await userModel.findOne({ email });
    if (user) {
      const checkPassword = await bcrypt.compare(password, user?.password!);

      if (checkPassword!) {
        return res.status(201).json({
          message: "user created",
          data: user._id,
        });
      } else {
        return res.status(404).json({
          message: "User's password is not correct'",
        });
      }
    } else {
      return res.status(404).json({
        message: "User doesn't exit",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create user",
    });
  }
};

export const viewUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const user = await userModel.find();

    return res.status(200).json({
      message: "view users",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to view user",
    });
  }
};

export const updateOneUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { userName } = req.body;
    const { userID } = req.params;
    const user = await userModel.findByIdAndUpdate(
      userID,
      {
        userName,
      },
      { new: true },
    );

    return res.status(201).json({
      message: "update user",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update user",
    });
  }
};

export const ViewOneUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const user = await userModel.findById(userID);

    return res.status(200).json({
      message: "view user",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to view user",
    });
  }
};

export const deleteOneUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const user = await userModel.findByIdAndDelete(userID);

    return res.status(201).json({
      message: "user deleted",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to delete user",
    });
  }
};
