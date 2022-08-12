const mongoose = require("mongoose");
module.exports = mongoose.model("Category", {
  name: {
    type: String,
  },
  list_of_spec: {
    type: Array
  }
});