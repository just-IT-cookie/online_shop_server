const mongoose = require("mongoose");
module.exports = mongoose.model("Module", {
  id_name: {
    type: String,
  },
  name: {
    type: String,
  },
});
