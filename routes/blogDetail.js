const router = require("express").Router();
const fs = require("fs");
const filePath = "./assets/DreamDictionary.json";

router.get("/blog/:id", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) res.json(err);
    const jsonData = JSON.parse(data);
    const detailJsonData = jsonData.BlogDetail;
    const answerId = req.params.id;
    if (!answerId) res.json({ error: "Id is null.." });
    try {
      const foundAnswer = detailJsonData.find((answer) => {
        return answerId == answer.BlogId;
      });
      console.log(foundAnswer);
      if (foundAnswer == null) res.json({ error: "No answers found" });
      res.json(foundAnswer);
    } catch (error) {
      res.json(error);
    }
  });
});

module.exports = router;
