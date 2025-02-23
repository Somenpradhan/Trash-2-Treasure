const express=require("express")
const app=express();
const path=require("path");

const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json()); //both are middleware

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/html")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
    
});
// app.get("/hello",(req,res)=>{
//     res.send("hello");
// });
app.get("/sign",(req,res)=>{
   res.render("signIn.ejs");
    
 });
 
   

app.get("/ig/:username",(req,res)=>{
    // const followers=["bigyajeet","biswo","binod"]
    // let {username}=req.params;
    // res.render("instagram.ejs"),{username,followers});
    let {username}=req.params;
    const trashData=require("./trash.json");
    const data=trashData[username];
    console.log(data);
    // console.log(trashData);
    res.render("home.ejs",{data});
});
app.get("/#exchange",(req,res)=>{
  console.log(req.body);
  res.render("exchange.ejs");
    res.send("product listed successfully");
     
  });
  app.post("/#exchange",(req,res)=>{
    console.log(req.body);
    res.render("exchange.ejs");
    res.send("product listed successfully");
     
  });


  app.get("/#events",(req,res)=>{
    console.log(req.body);
    res.send("event planned successfully");
     
  });

  app.post("/#events",(req,res)=>{
    console.log(req.body);
    res.send("event planned successfully");
     
  });


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});