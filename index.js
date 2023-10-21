const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('You are on Home Page !!');
})

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const productRouter=require('./routes/product');

app.use('/product',productRouter);

app.listen(port, () => {
    console.log(`Server is Started ${port}`)
})