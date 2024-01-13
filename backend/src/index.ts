import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose'
import userRoutes from './routes/user'
import authRoutes from './routes/auth'
import cookieParser from "cookie-parser";
import path from 'path';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://hotel-booking-app-xuxs.onrender.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', "true");
    next();
  });
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: process.env.FRONTEND_URL,
credentials:true}));
app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes)
app.listen(7000, ()=>{
    console.log("server running on localhost:7000")
})
