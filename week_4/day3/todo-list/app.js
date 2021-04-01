const addButton = document.querySelector(".btn");
const userInput = document.querySelector(".input");


class Input {
  constructor(task) {
    this.task = task;
  }
}

class UI {
  addTask(input) {
    const container = document.querySelector(".container");
    const ul = document.createElement("ul");

    const li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
      <div class="note-container">
        <p>${input.task}</p>
      </div>
    `

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = "Delete Task";
    

    li.append(deleteButton);
    ul.append(li);
    container.append(ul);


    deleteButton.addEventListener("click", (e) => {
      e.target.parentNode.remove()
    })
  }
}


addButton.addEventListener("click", () => {
  let task = userInput.value
  const input = new Input(task);

  const ui = new UI();

  if (task === "") {
    alert("Please fill in text field!!")
  } else {
    ui.addTask(input);
  }
})


