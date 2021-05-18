const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.use(bodyParser.urlencoded({extended:true}));
app.post("/", function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result=n1+n2;
  res.send("Ans is "+result);
});
