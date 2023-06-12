const express = require("express")
require("dotenv").config();


const cookieParser = require("cookie-parser");
const { connection } = require("./config/db");

const app = express();

const port = process.env.port;

app.use(express.json());
app.use(cookieParser());

app.get("/",async(req,res)=>{
    res.send({message:"Welcome to weather app"})
})

app.listen(port,async()=>{
    try{
        await connection
        console.log(`connected to db listening on localhost:${port}`);
    }catch(err){
        console.log(err.message);
    }
})