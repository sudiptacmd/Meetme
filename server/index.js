import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

//database
mongoose
  .connect(process.env.MONGO_URL)
  .then((r) => console.log("Connection to DB successful"))
  .catch((e) => console.log("err", e));

//middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // !!!TODO limit origin

//routes
app.use("/api", authRoutes);

//server
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Server running on port ${port}`));
