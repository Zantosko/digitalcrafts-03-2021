const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3011;

app.get("/",(req,res) => {
  readFile("./views/index.html","utf8",(err,html) => {
    res.send(html);
  });
});

app.get("/store",(req,res) => {
  readFile("./views/store.html","utf8",(err,html) => {
    res.send(html);
  });
});

app.get("/contact",(req,res) => {
  readFile("./views/contact.html","utf8",(err,html) => {
    res.send(html);
  });
});

app.get("*",(req,res) => {
  res.send("This page doesn't exist!")

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});