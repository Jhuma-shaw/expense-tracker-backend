import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}