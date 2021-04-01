const container = document.querySelector(".container");
const addButton = document.querySelector(".btn");
const userInput = document.querySelector(".input");
const ul = document.createElement("ul");


addButton.addEventListener("click", addTask)


function addTask() {
    const li = document.createElement("li");
    li.className = "task";
  
    li.innerHTML = `
      <div class="note-container">
        <p>${userInput.value}</p>
      </div>
    `
  
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = "Delete Task";
    
  
    li.append(deleteButton);
    ul.append(li);
    container.append(ul);
  
  
  
    deleteButton.addEventListener("click", (e) => {
      deleteTask(e);
    })
  
}
  
function deleteTask(e) {
  let item = e.target.parentNode;

  item.addEventListener("click", () => {
    item.remove();
  })
}