import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import bookingRoute from "./routes/bookings.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// for testing
app.get("/", (req, res) => {
    res.send("api is running")
})
// database connection 
const connect = async()=>{
    try {
            await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser:true,
                useUnifiedTopology:true

            })
            console.log("MongoDB connected")
        
    } catch (error) {
        console.log("MongoDB connection Fails")
    }
}

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/tours",tourRoute);
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/booking",bookingRoute);

app.listen(port, () => {
    connect();
    console.log("server listening on port ", port);
})