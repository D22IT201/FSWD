const http = require("http");
const express = require("express");
const itemRouter =require ("./express/week5_1")
const app = express();
app.use(express.json());
app.use("/week5_1", itemRouter);

app.use("/", function (req,res){
res.end("It works")
});
const httpserver = http.createServer(app);
httpserver.listen(3000,()=>{
console.log("Listning on port 3000...");
});