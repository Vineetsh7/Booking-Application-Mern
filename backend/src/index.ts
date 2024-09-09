import express, { Request, Response } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.route";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let port = process.env.PORT || 4000;

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`App is listing on port ${port}`);
});
