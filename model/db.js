const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/Crud');
    console.log("DB is Connected  !! ");
}

module.exports = connectDB;