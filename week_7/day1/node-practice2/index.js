const express = require("express")
const app = express()
const PORT = 3001
const { readFile } = require("fs")

app.get("/",(req,res) => {
  // res.send("You just made a Node server")
  readFile("./views/main.html","utf8",(err,html) => {
    res.send(html)
  });
});

app.get("/home",(req,res) => {
  readFile("./views/home.html","utf8",(err,html) => {
    res.send(html)
  });
});

app.get("/about",(req,res) => {
  readFile("./views/about.html","utf8",(err,html) => {
    res.send(html)
  });
});

app.get("/faq",(req,res) => {
  readFile("./views/faq.html","utf8",(err,html) => {
    res.send(html)
  });
});

app.post("/messages",(req,res) => {

  const {name,logo} = req.body

  const message = `This is a message with ${name} and ${logo}`
  res.send(message)
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