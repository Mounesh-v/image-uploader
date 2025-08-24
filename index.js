import express from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { File } from "./Models/Image.js";
import { Image_Controller } from "./Controllers/image.js";
import { connectDb } from "./Models/db.js";
import { upload_multer } from "./Controllers/upload_multer.js";
import { homeRoute } from "./Routes/route.js";

const app = express();

// Connectdb
connectDb();

//Rendering Ejs file
app.get("/", homeRoute);

// Upload Multer
app.post("/upload", upload_multer, Image_Controller);

const PORT  = process.env.PORT || 3000;
app.listen(PORT , () =>
  console.log(`Server is Running On ${PORT}`)
);
