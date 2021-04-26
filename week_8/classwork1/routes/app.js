const express = require("express");
const pool = require("../db")
const router = express.Router();

// File Paths
router.get("/",(req,res) => {
  res.render("main");
});

router.post("/", async (req,res) => {
  try {
    let {first_name, last_name, email} = req.body;

    await pool.query("INSERT INTO info (first_name,last_name,email) VALUES($1,$2,$3)",[first_name,last_name,email]);

    res.redirect("/");
  } catch(err) {
    console.log(err.message);
  }
})


module.exports = router