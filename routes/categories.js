const express = require("express");
const router = express.Router();
const Categories = require("./../Database/categories");

router.get("/get_category_specs", async(req,res) => {
  try {
    let category_specs = await Categories.findOne({ name: req.query.name }).exec();
    console.log(category_specs);
    res.send(category_specs);
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;