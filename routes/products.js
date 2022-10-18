const {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
} = require("../controllers/products");
const express = require("express");
const router = express.Router();

router.get("/", returnAllProducts);
router.get("/:productID", returnSingleProduct);
router.post("/", createProduct);

router.patch("/:productID", updateProduct);
router.put("/:productID", replaceProduct);
router.delete("/:productID", deleteProduct);

module.exports = router;
