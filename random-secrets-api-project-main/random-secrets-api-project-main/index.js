import express from "express";
import axios from "axios";

const app=express();
const port=3000;

app.get("/", async(req,res)=>{
    try{
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const result = response.data;
        res.render("index.ejs", {
         user: result.username,
         secret:result.secret,
        });
        
    }catch(error){
        res.send(error.message);
    }
});
  app.use(express.static("public"));

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});