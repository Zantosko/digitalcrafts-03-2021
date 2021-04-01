// const container = document.querySelector(".container");
// const addButton = document.querySelector(".btn");
// const userInput = document.querySelector(".input");
// const ul = document.createElement("ul");


// addButton.addEventListener("click", addTask)


// function addTask() {
//     const li = document.createElement("li");
//     li.className = "task";
//     li.innerHTML = `
//       <div class="note-container">
//         <p>${userInput.value}</p>
//       </div>
//     `
  
//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("delete-btn");
//     deleteButton.innerHTML = "Delete Task";
    
  
//     li.append(deleteButton);
//     ul.append(li);
//     container.append(ul);
  
  
  
//     deleteButton.addEventListener("click", deleteTask)
  
// }
  
// function deleteTask(e) {
//   let item = e.target.parentNode;

//   item.addEventListener("click", () => {
//     item.remove();
//   })
// }



const container = document.querySelector(".container");
const addButton = document.querySelector(".btn");
const userInput = document.querySelector(".input");
const ul = document.createElement("ul");

function getuuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );

}

addButton.addEventListener("click", addTask)


function addTask() {
  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
      <div class="note-container">
        <p>${userInput.value}</p>
      </div>
    `
  const uuid = getuuid();
  li.setAttribute("data-id", uuid);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = "Delete Task";

  li.append(deleteButton);
  ul.append(li);
  container.append(ul);

  deleteButton.addEventListener("click", () => deleteTask(uuid));
  userInput.value = "";
  userInput.focus();
}

function deleteTask(id) {
  const ulist = document.querySelector("ul");
  const allListElement = Array.from(document.querySelectorAll("li.task"));
  const elementtoDelete = allListElement.find(el => el.dataset.id === id);
  ulist.removeChild(elementtoDelete)

}