const express = require("express")
const app = express()
app.use(express.json())

const PORT = 3003

app.get("/",(req,res) => {
  res.send("Home")
})

app.get("/about",(req,res) => {
  res.send("About")
})

app.post("/team", (req,res) => {
  const { team, logo } = req.body
  const message = `This is our team name ${team} and logo ${logo}`
  res.send(message)
})

app.get("/FAQ",(req,res) => {
  res.send("FAQ")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})