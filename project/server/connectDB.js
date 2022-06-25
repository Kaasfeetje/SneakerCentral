import mongoose from "mongoose";

export const connectDB = async () => {
    console.log("test url", process.env.DB_URL);
    mongoose.connect(process.env.DB_URL);
};
