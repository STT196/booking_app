// qF6NDuQ4aDlWAUAa
import express from "express";
import cors from 'cors'
import mongoose  from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
dotenv.config()
const port = process.env.PORT || 3000;

const app =express();
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

mongoose.connect(process.env.MONGO_STR).then(()=>{
    console.log('success')
})

app.use('/booking',userRoutes)

app.listen(port,()=>{
    console.log(`server is running ${port}`)
})
