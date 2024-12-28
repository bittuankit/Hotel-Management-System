import express from "express";
import { addEmp, login } from "../controller/emp.js";

const router = express.Router();

router.post("/login", login);

router.post("/add", addEmp);

export default router;
