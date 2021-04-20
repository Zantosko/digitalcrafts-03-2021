const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express")
const path = require("path")
const { readFile } = require("fs")

const PORT = 3005;
const VIEWS_PATH = path.join(__dirname, "/views")

// Convert to json
app.use(express.json())

// Static folder
app.use("/css",express.static("css"))

// Setting up template engine
app.engine("mustache",mustacheExpress(VIEWS_PATH + "/partials",".mustache"))
app.set("views",VIEWS_PATH)
app.set("view engine","mustache")

// File Paths
app.get("/",(req,res) => {
  res.render("index")
});

app.get("/store",(req,res) => {
  res.render("store")
});

app.get("/contact",(req,res) => {
  res.render("contact")
});

app.post("/author", (req,res) => {
  const {firstName,lastName,age} = req.body;
  const message = `My name is ${firstName} ${lastName} and I'm ${age} years old.`
  res.send(message)
})

app.get("*",(req,res) => {
  res.send("This page doesn't exist!")

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});