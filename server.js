require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/greet", (req, res) => {
  res.json({"Message":"API is running..."});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});