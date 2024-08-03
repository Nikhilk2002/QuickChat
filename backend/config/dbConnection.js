require ('dotenv').config();
const mongoose= require("mongoose")

module.exports={
    dbConnect:async()=>{
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/QuickChat').then(()=>{
                console.log("DataBase Connected Succesfully");
            })
        }
        catch(err){
          console.log(err);
        }
    }
    
}