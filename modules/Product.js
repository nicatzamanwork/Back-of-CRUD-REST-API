const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const productSchema = Schema({
  name: String,
  price: Number,
  description: String,
  isDeleted: { type: Boolean, default: false },
});

const product = mongoose.model("Product", productSchema);

module.exports = {
  product,
};
