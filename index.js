const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/products");
const productData = require("./data/products.json");
const hbs = require('hbs');

//Creating a server
const app = express();

//Setup our server
app.use(cors());
app.use(express.json());    
app.set("view engine", "hbs");
app.set("views", "./templates");
app.use(express.static(__dirname + "/public"));

//Setup HBS
hbs.registerPartials(__dirname + "/templates/partials");

//Our Middlewares
const logger = (req, res, next) => {
    console.log("This is middleware");
    next();
}

const logger2 = (req, res, next) => {
    console.log("This is second middleware");
    next();
}

// app.use(logger);

app.get("/", [logger, logger2], (req, res) => {
  //Passing product data into the hbs file
  res.render("index", { productData });
});

app.get("/products/:productID", (req, res) => {
  const { productID } = req.params;
  const selectedProduct = productData.find(
    (product) => product.id === parseInt(productID)
  );
  res.render("details", selectedProduct);
});

app.use("/api/products", productRouter);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
