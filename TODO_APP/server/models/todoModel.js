import mongoose from "mongoose";


const todoSchema=new mongoose.Schema({

  taskName:String,
  taskType:String,
  taskStatus:{type:Number,default:0},
  date:Date


},{timestamps:true})


const todoModel=mongoose.model("todoApp",todoSchema)

export default todoModel;

