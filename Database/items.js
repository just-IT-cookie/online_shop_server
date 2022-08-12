const mongoose = require("mongoose");
module.exports = mongoose.model("Item", {
  image: {
    type: Array,
  },
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  old_price: {
    type: String,
  },
  module_locating: {
    type: String,
  },
});
