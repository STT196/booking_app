import mongoose from "mongoose";

const placeSchema=new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    title:String,
    address:String,
    photo:[String],
    extraInfor:String,
    checkIn:Number,
    checkout:Number,
    maxGuests:Number

});

const placeModel=mongoose.model('Place',placeSchema);

export default placeModel;