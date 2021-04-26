const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const path = require("path");
const cors = require("cors");
// const pool = require("./db.js");
const frontEnd = require("./js/app")

const port = process.env.PORT || 3014;
const VIEWS_PATH = path.join(__dirname, "/views");

// Middleware
app.use(express.json());
app.use(cors());

// Static folder
app.use("/css",express.static("css"));
app.use("/",frontEnd)

// Setting up template engine
app.engine("mustache",mustacheExpress(VIEWS_PATH + ".mustache"));
app.set("views",VIEWS_PATH);
app.set("view engine","mustache");

// File Paths
app.get("/",(req,res) => {
  res.render("main");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});