import { json } from "body-parser";
import express from "express";

const app = express();
app.use(json);

//connect to server
app.listen(8000, ()=>{
    console.log("connected to server on port 8000")
})