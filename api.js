const express =  require('express')
const dbCollection = require('./vikas')
const mongoDb = require('mongodb')
const app = express();
app.use(express.json())
app.get ('/',async(req,resp)=>{
    let data = await dbCollection ();
    data = await data.find().toArray();
    resp.send(data)
})

app.post ('/',async(req,resp)=>{
    let data = await dbCollection();
    data = data.insertOne(req.body)
  
    resp.send({name:"anil"})
})
app.put('/',async(req,resp)=>{
    let data = await dbCollection();
    let result = await data.updateOne({
        name:req.body.name },
        {$set : req.body})
    console.log(req.body);
    resp.send({result:"updated"})
})

app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id);
    let data = await dbCollection();
    let result = await data.deleteMany({_id: new mongoDb.ObjectId(req.params.id)})
    resp.send({result:result})
})
app.listen(5000)