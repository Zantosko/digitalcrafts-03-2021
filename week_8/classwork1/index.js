const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const frontEnd = require("./routes/app")

const port = process.env.PORT || 3014;
const VIEWS_PATH = path.join(__dirname, "/views");

// Middleware
app.use(cors());

// Static folder
app.use("/css",express.static("css"));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))

// Setting up template engine
app.engine("mustache",mustacheExpress(VIEWS_PATH + ".mustache"));
app.set("views",VIEWS_PATH);
app.set("view engine","mustache");

app.use("/",frontEnd)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});