import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
});

const port = 3000;
const app = express();

app.use("/api/user", userRouter);

app.listen(port, ()=>{
    console.log(`Your app is running on the port ${port}`)
});