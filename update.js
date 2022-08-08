const dbCollection = require('./vikas')
const updateData = async()=>{
    let data =await dbCollection();
    let result = await data.update(
        {name:'note9'},{
            $set:{name:'note9 pro max'}
        }
    );
    console.log(result);

}
updateData();