import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

// Disk Storage
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

export const upload_multer = upload.single("file");
