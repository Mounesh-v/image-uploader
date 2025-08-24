import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI, { dbName: "Url" });
    console.log("MongoDb Is Connected");
  } catch (error) {
    console.log("error", error);
  }
};
