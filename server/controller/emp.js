import { Emp } from "../models/emp.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    let emp = await Emp.findOne({ username, role }).select("+password");

    if (!emp)
      return res.json({ success: false, message: "Invalid input fields." });

    const isMatch = await bcrypt.compare(password, emp.password);

    if (!isMatch)
      return res.json({ success: false, message: "Invalid Employee." });

    const token = jwt.sign({ _id: emp._id }, process.env.JWT_SECRET);

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({ success: true, message: "Successfully login..." });
  } catch (error) {
    console.log(error);
  }
};

export const addEmp = async (req, res, next) => {
  try {
    const {
      id,
      userId,
      userIdNumber,
      firstname,
      lastname,
      username,
      role,
      address,
      join,
      amount,
    } = req.body;

    let emp = await Emp.findOne({ username });

    if (emp)
      return res.json({ success: false, message: "employee already exist." });

    const hashPassword = await bcrypt.hash(`@${firstname}${id}`, 10);

    emp = await Emp.create({
      id,
      userId,
      userIdNumber,
      firstname,
      lastname,
      username,
      password: hashPassword,
      role,
      address,
      join,
      amount,
    });

    res.json({ success: true, message: "Employee Added." });
  } catch (error) {
    console.log(error);
  }
};
