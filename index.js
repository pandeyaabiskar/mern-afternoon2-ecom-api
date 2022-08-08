const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/products");
const productData = require("./data/products.json");
const app = express();

//Setup our server
app.use(cors());
app.set("view engine", "hbs");
app.set("views", "./templates");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //Passing product data into the hbs file
  res.render("index", { productData });
});

app.get("/products/:productID", (req, res) => {
  const { productID } = req.params;
  const selectedProduct = productData.find(
    (product) => product.id === parseInt(productID)
  );
  res.render("details", { product: selectedProduct });
});

app.use("/api/products", productRouter);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
