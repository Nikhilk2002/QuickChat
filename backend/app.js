require(`dotenv`).config();
const cors= require('cors')
const express=require('express')
const app=express();
const dbConnection= require('./config/dbConnection')





dbConnection.dbConnect();
app.use(express.json())
app.use(cors())



const PORT =process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`);
});