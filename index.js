// var a= 10;
// var b= 20;
// var c= 30;
// console.log(a+b+c);

// const app = require('./app')
// console.log(app.x);
// const arr =[1,2,3,4,5,6,7]
// const result = arr.filter((item)=>{
//     return item>4;

// })
// console.log(result);
// const fs =require('fs')
// console.log(__filename);
// fs.writeFileSync("vikas.js","my name is vikas")
// const colour =require ('colors')
// console.log("package.json".red);
// const http = require('http');
// const data = require('./app');
//  http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
//  }).listen(5000) 
// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2],input[3])
// const path = require('path');
// const dirPath = path.join(__dirname,'crud')
// const filrpath = `${dirPath}/apple.txt`
// fs.writeFileSync(filrpath,'this is a simple text')
//  fs.readFile(filrpath,'utf-8',(err,item)=>{
//    console.log(item);
//  })
// fs.appendFile(filrpath,'file name is apple',(err)=>{
//     if(!err) console.log('file is updated');
// })
// fs.unlinkSync( `${dirPath}/apple.txt`)
// let a =10;
// let b =20;
// let waitingdata = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })

// waitingdata.then((data)=>{
//     console.log(a+data);

// })
// const express = require('express');
// const reqFilter= require('./middleware');
// const app = express();
// const route= express.Router();


// // app.use(reqFilter);
// route.use(reqFilter)
// app.get('/', (res, resp) => {
//     resp.send('Welcome to Home page')
// });

// app.get('/users', (res, resp) => {
//     resp.send('Welcome to Users page')
// });

// route.get('/about', (res, resp) => {
//     resp.send('Welcome to About page')
// });
// route.get('/contact', (res, resp) => {
//     resp.send('Welcome to contact page')
// });

// app.use('/',route);

// app.listen(5000)
// const dbCollection = require('./vikas')

      ////using then////
//   dbCollection().then((resp)=>{
//     resp.find({name:'y2'}).toArray().then((data)=>{
//         console.log(data);
//     })
//   })
  /////using Async Await//
  // const main=async ()=>{
  //   let data = await dbCollection();
  //   data = await data.find({name:"y1"}).toArray()
  //   console.log(data);

  // }
  // main();
  ////////// mongoose Crud ////////



// const mongoose = require('mongoose');
// const productSchema= new mongoose.Schema({
//   name:String,
//   price:Number
// });

// const saveInDB =async()=>{
// await mongoose.connect("mongodb://localhost:27017/e-com")

// const productsModel =  mongoose.model('products',productSchema);
// let data = new productsModel({name:"m10"
// ,price:1000
// });
// let result = await data.save();
// console.log(result);
// }

// saveInDB();
// const updateINDb = async()=>{
//   const products  =  mongoose.model('products',productSchema);
//   let data = await products.updateOne(
//     {name:"max 8" },
//   {
//     $set :{price:750,name:'max9'}
//   }
//   )
 
// console.log(data);
// }
// updateINDb();
// const DeleteINDB = async()=>{
//   const products  =  mongoose.model('products',productSchema);
//   let data = await products.deleteOne({name:"max8"});
//   console.log(data);
// }
// DeleteINDB();

// const os = require('os')
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.hostname());
// console.log(os.userInfo);
     ////////EVENT/////////
const express =  require('express');
const EventEmitter = require('events');
const app = express()
const event = new EventEmitter();
 let count= 0 
event.on("countAPI",()=>{
  count++
  console.log("event called",count);
})

app.get("/",(req,resp)=>{
  resp.send("api called")
  event.emit("countAPI");
});
app.listen(5000)




