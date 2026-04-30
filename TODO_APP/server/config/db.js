import mongoose from "mongoose";

const connectDb=async()=>{

try{
const con=await mongoose.connect(process.env.MONGO_URI)

console.log(`db Connected ${con.connection.host}`)

}catch(err){

    console.log("error occured",err);
    process.exit(0)
    
}
}

export default connectDb