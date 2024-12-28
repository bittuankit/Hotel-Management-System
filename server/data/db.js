import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, { dbName: "hotelData" })
      .then(() => console.log("Database is connected..."))
      .catch((e) => console.log(e));
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
