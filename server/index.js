import express from "express";
import { config } from "dotenv";
import connectDB from "./data/db.js";
import empRoute from "./routes/emp.js";
import cusRoute from "./routes/cus.js";
import statsRoute from "./routes/stats.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/v1/emp", empRoute);
app.use("/api/v1/customer", cusRoute);
app.use("/api/v1/stats", statsRoute);

config({
  path: "./config.env",
});

connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Working...");
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));
