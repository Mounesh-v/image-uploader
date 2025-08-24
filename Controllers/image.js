import dotenv from "dotenv";
dotenv.config();
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { File } from "../Models/Image.js";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const Image_Controller = async (req, res) => {
  const file = req.file.path;
  //   Upload Cloudinary
  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "Image_Uploader",
  });

  //   Save to Db
  const db = await File.create({
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });

  res.render("index.ejs", { url: cloudinaryRes.secure_url });
};
