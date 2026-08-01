import express from "express";
import { skuRouter } from "./API/skuAPI.js";
import path from "path";

const app = express();
app.use(express.json())


app.use(express.static(path.resolve("../frontend/client/dist")))
app.use(skuRouter);

//connect to server
app.listen(8000, ()=>{
    console.log("connected to server on port 8000")
})


//catch all fallback route is handled in react if express doesn't recognize
app.get("/{*any}", (req, res)=>{
    res.sendFile(path.resolve("../frontend/client/dist/index.html"));
})

