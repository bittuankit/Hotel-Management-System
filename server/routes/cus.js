import express from "express";
import { addCus, getCus, searchCus } from "../controller/cus.js";

const routes = express.Router();

routes.post("/addCus", addCus);

routes.get("/getCus", getCus);

routes.get("/search/:query", searchCus);

export default routes;
