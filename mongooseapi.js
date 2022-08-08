const express = require('express');
const { WriteConcern } = require('mongodb');
require('./config');
const product= require ('./product')
const app = express();
const multer = require('multer')
app.use(express.json())
app.post("/create",async(req,resp)=>{
    let data = new product(req.body)
    let result = await data.save();
    console.log(req.body);
    resp.send(result)
});
app.get("/list",async(req,resp)=>{
    let data = await product.find();
   // let result = await data.save();
   // console.log(req.body);
    resp.send(data)
});
app.delete("/delete/:_id",async(req,resp)=>{
    let data = await product.deleteOne(req.params);
   // let result = await data.save();
    console.log(req.params);
    resp.send(data)
});
app.put("/update/:_id",async(req,resp)=>{
    let data = await product.updateOne(
        req.params,
        {
            set$:req.body
        }
        );
   // let result = await data.save();
    console.log(req.params);
    console.log(req.body);
    resp.send(data)
});
app.get("/search/:key",async(req,resp)=>{
    let data = await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    );
   // let result = await data.save();
   // console.log(req.body);
    resp.send(data)
});
const upload =multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname + "-" + Date.now()+".jpg")
        }

    })
}).single("user_file");


app.post("/upload",upload,async(req,resp)=>{
   // let data = new product(req.body)
  //  let result = await data.save();
   // console.log(req.body);
    resp.send("file upload")
});
app.listen(5000)