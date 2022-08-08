const productData = require("../data/products.json");


const returnAllProducts = (req, res) => {
    const { category } = req.query;
    //Check if category is undefined or not
    //If not undefined, filter the data by provided category
    if (category) {
      const filteredData = productData.filter(
        (product) => product.category === category
      );
      res.json(filteredData);
    } else {
      //If undefined, send all product data
      res.json(productData);
    }
  }

  const returnSingleProduct = (req, res) => {
    const { productID } = req.params;
    res.json(productData[productID]);
  }

  const createProduct = (req, res) => {
    console.log(req.body);
    //Code to insert the data into the database
    res.send("Data Received");
  }

module.exports = {returnAllProducts, returnSingleProduct, createProduct}