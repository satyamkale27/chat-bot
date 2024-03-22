const port = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
