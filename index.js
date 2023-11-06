const express = require('express');
const app = express();
const connectDB = require("./model/db");
const port = 3000

app.get('/', (req, res) => {
    res.send('You are on Home Page !!');
})


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const productRouter=require('./routes/product');
const authRouter=require('./routes/auth');

app.use('/product',productRouter);
app.use('/auth',authRouter);

app.listen(port, () => {
    console.log(`Server is Started ${port}`)
})
app.set('json spaces');

connectDB();


