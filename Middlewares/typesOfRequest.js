// Please don't change the pre-written code

const express = require("express");
const server = express();

// Write your code here
server.get("/",(req,res)=>{
    res.set("Content-Type","text/plain")
    res.send("get");
})

server.post("/",(req,res)=>{
    res.status(201).send("post");
})

server.put("/",(req,res)=>{
    res.send("put");
})

server.delete("/",(req,res)=>{
    res.send("delete");
})

server.listen(3000, () => {
    console.log("server is listenening on port 3000");
  });
