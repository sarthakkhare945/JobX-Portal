import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`Database connected 🔥🔥😎😎`);
  } catch (error) {
    console.log("Server Error", error);
  }
};

export default connectDB;
