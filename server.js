const PORT = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const LANGUAGE_MODEL_API_KEY = process.env.LANGUAGE_MODEL_API_KEY;
const LANGUAGE_MODEL_URL = `https://generativelanguage.googleapis.com/v1beta1/models/chat-bison-001:generateMessage?key=${LANGUAGE_MODEL_API_KEY}`;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
