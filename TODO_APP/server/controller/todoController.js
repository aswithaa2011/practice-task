import todoModel from "../models/todoModel.js"


export const todoAdd=async(req,res)=>{

   try{

     const {taskName,taskType,date}=req.body

    const todoInsert=await todoModel.create({taskName,taskType,date})

    res.status(201).json({msg:"Data inserted in todo App",todoInsert})
    
   }
   catch(error){
  console.log("error in inserting data",error);
    res.status(404).json({msg:"error in inserting data",error})
  
   }
}


export const todoList=async(req,res)=>{

   try{

     const fetchdata=await todoModel.find()
     res.status(200).json({fetchdata})

       
   }
   catch(error){
  console.log("error in getting data",error);
    res.status(404).json({msg:"error in getting data",error})
  
   }
}


export const todoUpdate=async(req,res)=>{

   try{
    
     const {taskName,taskType,date}=req.body
     const {userid}=req.params

     const updatedata=await todoModel.findByIdAndUpdate(userid,{taskName,taskType,date},{returnDocument:'after'} )
       res.status(201).json({msg:"Data updated in todo App",updatedata})

       
   }
   catch(error){
  console.log("error in updating data",error);
    res.status(404).json({msg:"error in updating data",error})
  
   }
}

export const todoDelete=async(req,res)=>{

   try{
         const {userid} = req.params 

     const deletedata=await todoModel.findByIdAndDelete(userid)
     res.status(200).json({msg:"data deleted successfully"})

       
   }
   catch(error){
  console.log("error in deleting data",error);
    res.status(404).json({msg:"error in deleting data",error})
  
   }
}