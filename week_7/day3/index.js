const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3002
const pool = require("./db.js")
console.log(port)

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.get("/", (req,res) => {
  res.send("Welcome to node server");
});

//* CRUD
//? create todolist
app.post("/todo", async (req,res) => {
  try {
    const {description} = req.body

    const newTodoInDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
    console.log(req.body);
    res.json(newTodoInDB)
  } catch(err) {
    console(err.message)
  }
})

//? read todolist
app.get("/read_todos", async (req,res) => {
  try {
    const readTodosFromDB = await pool.query("SELECT * FROM todo")
    res.json(readTodosFromDB)
  } catch(err) {
    console(err.message)
  }
})

app.get("/read_todos/:id", async (req,res) => {
  try {
    const { id } = req.params;
    const readSingleTodoFromDB = await pool.query("SELECT * FROM todo")
    res.json(readSingleTodoFromDB)
  } catch(err) {
    console(err.message)
  }
})

//? update todolist


//? delete todolist


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})