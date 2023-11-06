const Mongoose = require("mongoose")
const ItemSchema = new Mongoose.Schema({

    itemId:{
        type:String
    },
    Itemname: {
        type: String
    },
    ItemPrice: {
        type: String
    }
})

const Item = Mongoose.model("item", ItemSchema)
module.exports = Item;