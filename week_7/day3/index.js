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
    res.json(readTodosFromDB.rows[0])
  } catch(err) {
    console(err.message)
  }
})

app.get("/read_todos/:id", async (req,res) => {
  try {
    const { id } = req.params;
    const readSingleTodoFromDB = await pool.query("SELECT * FROM todo WHERE todo_id = ($1)",[id])
    res.json(readSingleTodoFromDB)
  } catch(err) {
    console(err.message)
  }
})

//? update todolist
app.put("/update_todos/:id", async (req,res) => {
  try {

  } catch(err) {
    console.log(err)
  }

  const { id } = req.params;
  const {description} = req.body

  const updateSingleTodoFromDB = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id])
  
  res.json(updateSingleTodoFromDB)

})

//? delete todolist
app.delete("/delete_todo/:id", async (req,res) => {
  try {

    const {id} = req.params;
    const deleteTodoInDB = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id])
  
    res.json("Todo was successfully deleted")
  } catch(err) {
    console.log(err)
  }

})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})