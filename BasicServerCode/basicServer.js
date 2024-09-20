const express = require("express");

// create a server
const server=express();

// Handle default request
server.get("/",(req, res)=>{
  res.send("Welcome to Express server!!")
})

// Listen on specified port.
server.listen(3100,()=>{
    console.log("Server is listening on port 3100!!")
})