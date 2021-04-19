const express = require("express")
const app = express()

const PORT = 3005

app.get("/",(req,res) => {
  res.send("You just made a Node server")
})

app.listen(PORT, () => {
  console.log(`Your server is running on ${PORT}`)
})