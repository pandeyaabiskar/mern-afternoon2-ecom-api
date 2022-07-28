const express = require('express');
const productRouter = require('./routes/products')
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Ecommerce API");
})

app.use('/api/products', productRouter)

app.listen(4000, () => {
    console.log("Server started at port 4000");
})