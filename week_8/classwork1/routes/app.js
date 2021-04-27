const express = require("express");
const pool = require("../db")
const router = express.Router();

// File Paths
router.get("/",(req,res) => {
  res.render("main");
});

// Creates new item in DB
router.post("/", async (req,res) => {
  try {
    let {first_name, last_name, email} = req.body;

    await pool.query("INSERT INTO info (first_name,last_name,email) VALUES($1,$2,$3)",[first_name,last_name,email]);

    res.redirect("/");
  } catch(err) {
    console.log(err.message);
  }
})

// Reads all items in the DB
router.get("/view_data", async (req,res) => {
  try {
    let data = await pool.query("SELECT * FROM info")
    res.render("main",{info: data.rows})

  } catch(err) {
    console.log(err.message)
  }
})

// Deletes specific item in the DB
router.post("/delete_item", async (req,res) => {
  try {

    let { info_id } = req.body;
    console.log(info_id)
    await pool.query("DELETE FROM info WHERE info_id = $1",[info_id]);
    res.redirect("/view_data")

  } catch(err) {
    console.log(err.message)
  }

});

// Takes you to specific edit page based on item selected
router.get("/edit_item/:info_id", async (req,res) => {
  let { info_id } = req.params;
  console.log(info_id)
  let data = await pool.query("SELECT info_id,first_name,last_name,email FROM info WHERE info_id = $1",[info_id]);
  console.log(data)
  
  res.render("edit-page",{info: data.rows})
});

// Updates item in the DB
router.post("/edit_item", async (req,res) => {
  let {first_name, last_name, email, info_id} = req.body

  await pool.query("UPDATE info SET first_name = $1, last_name = $2, email = $3 WHERE info_id = $4",[first_name,last_name,email,info_id])

  res.redirect("/")
})


module.exports = router