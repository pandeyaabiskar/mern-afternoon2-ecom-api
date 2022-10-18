const mongoose = require("mongoose");

function connectDatabase() {
  mongoose.connect("mongodb://localhost:27017/ecom-afternoon", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database connected successfully!");
    }
  });
}

module.exports = connectDatabase;
