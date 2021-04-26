const express = require("express");
const app = express();
const PORT = 2021
const es6Renderer = require("express-es6-template-engine");

// Simulate a database
const people = [
  {people_id: 1, name: "Zach", age: 24, job: "web developer", listOfKnownAliases: ["Z", "Zachary"]},
  {people_id: 2, name: "Mark", age: 45, job: "server", listOfKnownAliases: ["Marky", "Marcos"]},
  {people_id: 3, name: "Nathan", age: 20, job: "student", listOfKnownAliases: ["Nathaniel", "Nate"]}
]

// Middleware
app.engine("html", es6Renderer);
app.set("views","../template");
app.set("view engine","html");

app.get("/",(req,res) => {
  res.render("people");
});

app.get("/person/:id", (req,res) => {
  const { id } = req.params;
  console.log(typeof id);
  // Async call to your database, grab the data, convert it to json
  // Send that to res.render, aka send it to the template page to display
  const person = people.find((person) => person.people_id.toString() === id);
  console.log(person);
  if(person) {
    res.render("user",{
      locals: {
        person: person,
      }
    })
  } else {
    res
    .status(404)
    .send(`That user does not exist, there are no users with an id of ${id}`)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})