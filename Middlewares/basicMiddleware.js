const express=require("express");

const server=express();

function globalMiddleware(req, res, next){
    console.log("This is application-level middleware.")
    next();
}

// Application-level means run for all the path in application
server.use(globalMiddleware);

// First req handler
server.get("/",(req, res,next)=>{
    console.log("First Middleware hit!!");
    next();
});

// final req handler
server.get("/",(req, res)=>{
  res.send("Second Middleware Hit !!")
});
// server.post("/",(req, res=>{}));
// server.put("/",()=>{});
// server.delete("/",()=>{});
// We can check these requests using postman

server.use(express.static('../public'));
server.listen(3000);