import express from "express";
import { addEmp, login, getEmp } from "../controller/emp.js";

const router = express.Router();

router.post("/login", login);

router.post("/add", addEmp);

router.get("/getEmp", getEmp);

export default router;
