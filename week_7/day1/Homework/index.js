const express = require("express");
const app = express();

const PORT = 3010;

app.get("/",(req,res) => {
  res.send("Hello this is my first node server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
