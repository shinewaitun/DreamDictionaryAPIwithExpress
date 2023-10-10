const router = require("express").Router();
const fs = require("fs");
const filePath = "./assets/DreamDictionary.json";

router.get("/blogs", (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.json(err);
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

module.exports = router;
