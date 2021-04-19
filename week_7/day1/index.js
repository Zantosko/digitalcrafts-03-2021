/*
* Notes
MERN
- MongoDB
- Express
- React
- Node

PERN
- PostgreSQL
- Express
- React
- Node

CREATE DATABASE todoDB

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY, -- MAKE THIS ID UNIQUE FROM ANY OTHER IDS
  userid SERIAL,

)

CREATE DATABASE gamerDB

CREATE TABLE gamer(
  gamer_id SERIAL PRIMARY KEY,
  userid SERIAL,
  userName VARCHAR(20)
)
*/

// console.log("hi");

//* Boiler Plate for creating Node server

const http = require("http");
const express = require("express")
const app = express()
const address = "127.0.0.1";
const PORT = 3002;
// fs stands for File System, used to read files for Node
// This type of syntax is called destructuring (introduced in ES6). It's shorthand for Dot Notation.
const { readFile } = require("fs")
app.use(express.json())

// const server = http.createServer((req,res) => {
//   console.log(req.url)
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("hello");
// })

// server.listen(PORT, address, () => {
//   console.log(`server is running on http://${address}:${PORT}`);
// });

//* Server using Express
// Express makes it easier to write Node servers by taking out all the boiler you have to write.
app.get("/", (req,res) => {
  readFile("./index.html","utf8",(err, html) => {
    res.send(html);
  })
  // res.end("Hello")
})

app.get("/doge", (req,res) => {
  const userName = { user: "joe" }
  res.send(userName)
})

app.listen(PORT,() => {
  console.log(`Your server is running on ${PORT}`)
})