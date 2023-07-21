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
exports.deleteOneDonation = exports.ViewOneDonation = exports.updateOneDonation = exports.viewDonation = exports.createDonation = void 0;
const donateModel_1 = __importDefault(require("../model/donateModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// import cloudinary from "../config/cloudinary";
const createDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, userName } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        // const { public_id, secure_url } = await cloudinary.uploader.upload(
        //   req.file?.path!,
        // );
        const donation = yield donateModel_1.default.create({
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
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to create donation",
        });
    }
});
exports.createDonation = createDonation;
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
const viewDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield donateModel_1.default.find();
        return res.status(200).json({
            message: "viewing donation",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to view donation",
        });
    }
});
exports.viewDonation = viewDonation;
const updateOneDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName } = req.body;
        const { donationID } = req.params;
        const user = yield donateModel_1.default.findByIdAndUpdate(donationID, {
            userName,
        }, { new: true });
        return res.status(201).json({
            message: "updated donation",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to update donation",
        });
    }
});
exports.updateOneDonation = updateOneDonation;
const ViewOneDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { donationID } = req.params;
        const user = yield donateModel_1.default.findById(donationID);
        return res.status(200).json({
            message: "view one donation",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to view one donation",
        });
    }
});
exports.ViewOneDonation = ViewOneDonation;
const deleteOneDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { donationID } = req.params;
        const user = yield donateModel_1.default.findByIdAndDelete(donationID);
        return res.status(201).json({
            message: "Donation deleted",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to delete donation",
        });
    }
});
exports.deleteOneDonation = deleteOneDonation;
