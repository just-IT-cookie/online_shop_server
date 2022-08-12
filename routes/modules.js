const express = require("express");
const router = express.Router();
const Modules = require("./../Database/modules");

router.get("/get_modules", async (req, res) => {
  try {
    let modules = await Modules.find().exec();
    res.send(modules);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
