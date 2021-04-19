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

console.log("hi");

//* Boiler Plate for creating Node server

const http = require("http");
const address = "127.0.0.1";
const PORT = 3002;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello");
})

server.listen(PORT, address, () => {
  console.log(`server is running on http://${address}:${PORT}`);
});
