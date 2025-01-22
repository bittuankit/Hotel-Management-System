import express from "express";
import {
  addCus,
  checkoutCustomer,
  getActiveCustomers,
  getCus,
  searchCus,
} from "../controller/cus.js";

const routes = express.Router();

routes.post("/addCus", addCus);

routes.get("/getCus", getCus);

routes.get("/search/:query", searchCus);

routes.get("/activeCustomer", getActiveCustomers);

routes.put("/updateCustomer", checkoutCustomer);

export default routes;
