const dbCollection = require('./vikas')
 
const deleteData =async ()=>{
    let data = await dbCollection();
   let result = await data.deleteMany({name:'note8 n'})
   console.log(result);
   if(result.acknowledged){
    console.log("record deleted");
   }


}
deleteData();