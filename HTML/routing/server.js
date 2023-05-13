import express  from "express";
let app=express();
//importing 
import pahune from "./guest.js";

app.use("/guest",pahune);

app.get('/',(req,res)=>{
    return res.send("Welcome To Goa Singham")
})

app.listen('1001',()=>{
    console.log("Server is running on PORT 1001")
})