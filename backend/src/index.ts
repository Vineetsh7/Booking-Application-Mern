import express, { Request, Response } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let port = process.env.PORT || 4000;

app.get("/api/user", async (req: Request, res: Response) => {
  res.json({ message: "This is the response" });
});

app.listen(port, () => {
  console.log(`App is listing on port ${port}`);
});
