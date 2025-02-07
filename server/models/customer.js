import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    cusId: {
      type: String,
      required: true,
    },
    idNumber: {
      type: String,
      required: true,
      select: false,
    },
    cusProfile: {
      type: String,
      required: true,
    },
    cusName: {
      type: String,
      required: true,
    },
    cusEmail: {
      type: String,
      required: true,
      unique: true,
    },
    cusGender: {
      type: String,
      required: true,
    },
    cusCountry: {
      type: String,
      required: true,
    },
    cusRoom: {
      type: String,
      required: true,
    },
    cusCheckIn: {
      type: String,
      required: true,
    },
    cusPayAmount: {
      type: Number,
      required: true,
    },
    isCheckedOut: {
      type: Boolean,
      default: false,
    },
    checkOutDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("customer", customerSchema);

export default Customer;
