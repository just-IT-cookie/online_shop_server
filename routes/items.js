const express = require("express");
const router = express.Router();
const Items = require("./../Database/items");

router.get("/get_main_page_items", async (req, res) => {
  try {
    let items = await Items.find({ module_locating: { $exists: true } }).exec();
    res.send(items);
  } catch (err) {
    console.log(err);
  }
});
router.get("/item_info", async (req,res) => {
  try {
    let item = await Items.findById(req.query.itemID).exec();
    res.send(item);
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;
