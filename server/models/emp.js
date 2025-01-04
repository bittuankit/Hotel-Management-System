import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userIdNumber: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "emp"],
    },
    address: {
      type: String,
      required: true,
    },
    join: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Emp = mongoose.model("Emp", schema);
