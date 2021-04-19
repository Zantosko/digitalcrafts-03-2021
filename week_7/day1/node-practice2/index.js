const express = require("express")
const app = express()
const PORT = 3001
const { readFile } = require("fs")

app.get("/",(req,res) => {
  res.send("You just made a Node server")
});

app.get("/home",(req,res) => {
  res.send("Home")
});

app.get("/about",(req,res) => {
  res.send("About")
});

app.get("/faq",(req,res) => {
  res.send("FAQ")
});

app.post("/messages",(req,res) => {
  res.send("message")
});

app.get("*",(req,res) => {
  // res.send("This page doesn't exist!")
  readFile("./index.html","utf8",(err,html) => {
    res.send(html)
  });

});


app.listen(PORT, () => {
  console.log(`Your server is running on localhost:${PORT}`)
});