// pg allows us to connect an instance of our database to a variable(Pool) and this allows our server to send requests to it.
const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "todolist"
})

module.exports = pool;
