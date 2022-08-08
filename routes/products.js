const {returnAllProducts, returnSingleProduct, createProduct} = require('../controllers/products')
const express = require("express");
const router = express.Router();

router.get("/", returnAllProducts);
router.get("/:productID", returnSingleProduct);
router.post("/" , createProduct);
// router.put("/:productID", (req, res) => {});
// router.delete("/:productID", (req, res) => {});

module.exports = router;
