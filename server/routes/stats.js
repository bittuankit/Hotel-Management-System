import express from "express";
import { getDashboardStats } from "../controller/stats.js";

const routes = express.Router();

routes.get("/details", getDashboardStats);

export default routes;
