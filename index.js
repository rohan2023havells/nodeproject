const express =require("express");
const app =express()

app.get("/",(req,response)=>{
    response.send("<h1>hello hi</h1>");
});
app.listen(8800,()=>{
    console.log("app is running");
});