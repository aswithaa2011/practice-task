import express from "express"
import { todoAdd,todoList, todoUpdate,todoDelete } from "../controller/todoController.js"

const route=express.Router()


route.post("/insert",todoAdd) //insert
route.get("/fetch",todoList)   //select
route.put("/update/:userid",todoUpdate)   //update by id 
route.delete("/delete/:userid",todoDelete)   //delete by id 




export default route



// http://localhost:5000/api/todo/insert
// http://localhost:5000/api/todo/fetch
// http://localhost:5000/api/todo/update/69f3092e7869528c7999e538
// http://localhost:5000/api/todo/delete/69f3092e7869528c7999e538


