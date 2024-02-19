import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({
  path: "./env",
});

// router imports 
import userRouter from './routes/user.route.js';

app.use("/api/v1/users" , userRouter) ;

export default app;
