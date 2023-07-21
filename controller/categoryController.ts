import { Request, Response } from "express";
import categoryModel from "../model/donateModel";
// import bcrypt from "bcrypt"
// import cloudinary from "../config/cloudinary";

export const createcategory = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { category, userID } = req.body;

    const Category = await categoryModel.create({
      category,
      userID,
    });

    return res.status(201).json({
      message: "category created",
      data: Category,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create category",
    });
  }
};


export const viewcategory = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const Category = await categoryModel.find();

    return res.status(200).json({
      message: "viewing category",
      data: Category,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to view category",
    });
  }
};

export const updateOnecategory = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { categoryID } = req.params;
    const Category = await categoryModel.findByIdAndUpdate(
      categoryID,
      { new: true },
    );

    return res.status(201).json({
      message: "updated category",
      data: Category,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update category",
    });
  }
};

export const ViewOnecategory = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { categoryID } = req.params;
    const Category = await categoryModel.findById(categoryID);

    return res.status(200).json({
      message: "view one category",
      data: Category,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to view one category",
    });
  }
};

export const deleteOnecategory = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { categoryID } = req.params;
    const Category = await categoryModel.findByIdAndDelete(categoryID);

    return res.status(201).json({
      message: "category deleted",
      data: Category,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to delete category",
    });
  }
};
