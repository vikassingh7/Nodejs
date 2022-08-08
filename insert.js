const dbCollection = require('./vikas')

const insert = async()=>{
    const db = await dbCollection();
    console.log(db);
    const result = await db.insert (
      [  {
            name:'note8',brand:'oppo',price:'12',category:'mobile'
        },
        {
            name:'note9',brand:'oppom',price:'120',category:'mobile'
        },
    ]
    );
    console.log(result);
    if(result.acknowledged){
        console.log("data inserted");
    }
   
}
insert();
