// const http = require('http')
// const datacontrol= (req,resp)=>
// {
//     resp.write("<h1>Hello this is vikas </h1>");
//     resp.end();

// }
// http.createServer(datacontrol).listen(4500);
const {MongoClient}= require ('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbCollection (){ 
    let result = await client.connect();
    let db = result.db("e-com");
    return  db.collection ('products');
    // let response = await colection.find({name:'y1'}).toArray();
    // console.log(response);
} 
module.exports= dbCollection;