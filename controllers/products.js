const ProductModel = require("../models/ProductModel");

const returnAllProducts = async (req, res) => {
  const productData = await ProductModel.find();

  const { category } = req.query;
  //Check if category is undefined or not
  //If not undefined, filter the data by provided category
  if (category) {
    const filteredData = await ProductModel.find({ category });
    res.json(filteredData);
  } else {
    //If undefined, send all product data
    res.json(productData);
  }
};

const returnSingleProduct = async (req, res) => {
  const { productID } = req.params;
  const selectedData = await ProductModel.findById(productID);
  res.json(selectedData);
};

const createProduct = async (req, res) => {
  console.log(req.body);
  //Code to insert the data into the database
  const product = await ProductModel.create(req.body);
  res.send(product);
};

const updateProduct = async (req, res) => {
  const { productID } = req.params;
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    productID,
    req.body,
    { new: true }
  );
  res.json(updatedProduct);
};

const replaceProduct = async (req, res) => {
  const { productID } = req.params;
  const updatedProduct = await ProductModel.findOneAndReplace(
    { _id: productID },
    req.body,
    { new: true }
  );
  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { productID } = req.params;
  const deletedProduct = await ProductModel.findByIdAndDelete(productID);
  res.json(deletedProduct);
};

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
};
