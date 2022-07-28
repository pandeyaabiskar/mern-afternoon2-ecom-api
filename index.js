const express = require('express');
const productData = require('./data/products.json')

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Ecommerce API");
})

app.get('/api/products', (req, res)=> {
    res.json(productData)
})

app.listen(4000, () => {
    console.log("Server started at port 4000");
})