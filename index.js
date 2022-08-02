const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/products')
const app = express();

//Setup our server
app.use(cors());
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.send("Welcome to Ecommerce API");
})

app.use('/api/products', productRouter)

app.listen(4000, () => {
    console.log("Server started at port 4000");
})