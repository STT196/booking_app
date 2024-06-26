// qF6NDuQ4aDlWAUAa
import express from "express";
import cors from 'cors'
import mongoose  from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import cookieParser from "cookie-parser";
dotenv.config()
const port = process.env.PORT || 3000;

const app =express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'http://20.171.113.25:4000'
}))

mongoose.connect(process.env.MONGO_STR).then(()=>{
    console.log('success')
})

app.use('/booking',userRoutes)

app.listen(port,()=>{
    console.log(`server is running ${port}`)
})
