import mongoose from "mongoose";

const connecttoMongoDB = async () => {
  try {
    console.log("trying to connect");
    console.log(process.env.MONGODB_URI);
    const connected = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connecttoMongoDB;
