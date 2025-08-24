import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  filename: String,
  public_id: String,
  imgUrl: String,
});

export const File = mongoose.model("cloudinary", ImageSchema);