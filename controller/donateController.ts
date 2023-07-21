import { Request, Response } from "express";
import donateModel from "../model/donateModel";
import bcrypt from "bcrypt"
// import cloudinary from "../config/cloudinary";

export const createDonation = async (
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

    const donation = await donateModel.create({
      email,
      password: hash,
      userName,
    //   avatar: secure_url,
    //   avatarID: public_id,
    });

    return res.status(201).json({
      message: "donation created",
      data: donation,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create donation",
    });
  }
};

// export const signInUser = async (
//   req: Request,
//   res: Response,
// ): Promise<Response> => {
//   try {
//     const { email, password } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);

//     const user = await donateModel.findOne({ email });
//     if (user) {
//       const checkPassword = await bcrypt.compare(password, user?.password!);

//       if (checkPassword!) {
//         return res.status(201).json({
//           message: "user created",
//           data: user._id,
//         });
//       } else {
//         return res.status(404).json({
//           message: "User's password is not correct'",
//         });
//       }
//     } else {
//       return res.status(404).json({
//         message: "User doesn't exit",
//       });
//     }
//   } catch (error) {
//     return res.status(404).json({
//       message: "Unable to create user",
//     });
//   }
// };

export const viewDonation = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const user = await donateModel.find();

    return res.status(200).json({
      message: "viewing donation",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to view donation",
    });
  }
};

export const updateOneDonation = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { userName } = req.body;
    const { donationID } = req.params;
    const user = await donateModel.findByIdAndUpdate(
      donationID,
      {
        userName,
      },
      { new: true },
    );

    return res.status(201).json({
      message: "updated donation",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update donation",
    });
  }
};

export const ViewOneDonation = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { donationID } = req.params;
    const user = await donateModel.findById(donationID);

    return res.status(200).json({
      message: "view one donation",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to view one donation",
    });
  }
};

export const deleteOneDonation = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { donationID } = req.params;
    const user = await donateModel.findByIdAndDelete(donationID);

    return res.status(201).json({
      message: "Donation deleted",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to delete donation",
    });
  }
};
