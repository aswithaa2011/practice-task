import express from "express" 
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import todoRoutes from "./Routes/todoRoutes.js"



dotenv.config()

const app=express()

connectDb()

app.use(cors())
app.use(express.json())


app.use("/api/todo",todoRoutes)

const port =process.env.PORT || 3000


app.listen(port,()=>{


    console.log(`server connected http://localhost:${port}` );


    
})

// http://localhost:5000/api/todo/