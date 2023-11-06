
const db = require('../model/item');

module.exports.saveData=async(data)=>{

    await db.create(data).then(user =>
        console.log('Data Saved !!')
    )
    .catch(err=>{
        console.log("Data Not Saved ");
    }) 

};

module.exports.getAlldata=async()=>{
    const all = await db.find();
    console.log("From Get All data",all);
    return all;
};

module.exports.deleteData=async(data)=>{

    console.log("Delete data1",data);
    // const val = db.deleteMany({"itemId": "125"});
    const res = await db.deleteOne({itemId:data.itemId});
    console.log("Anuj1 ",res.deletedCount);
}

module.exports.updateData=async(data)=>{

    const filter = { itemId: data.itemId};
    const update = { ItemPrice: data.ItemPrice};

    let doc = await db.findOneAndUpdate(filter, update);

    console.log('updateData ',data);
    console.log("Anuj Record is  Record->",doc);
}