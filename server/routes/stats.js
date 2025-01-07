import express from "express";
import {
  getBarChart,
  getDashboardStats,
  getPieChart,
} from "../controller/stats.js";

const routes = express.Router();

routes.get("/details", getDashboardStats);

routes.get("/bar", getBarChart);

routes.get("/pie", getPieChart);

export default routes;
