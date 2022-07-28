const productData = require("../data/products.json");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
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
});

router.get("/:productID", (req, res) => {
  const { productID } = req.params;
  res.json(productData[productID]);
});

module.exports = router;
