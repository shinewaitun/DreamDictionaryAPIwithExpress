const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/blogs"));
app.use(require("./routes/blogDetail"));

app.listen(3000, () => {
  console.log("Server started listening in port 3000");
});
