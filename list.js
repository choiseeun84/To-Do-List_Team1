let toDoListArray = [];

const addBtn = document.querySelector(".add_button");
const addInput = document.querySelector(".add_input");

function handleTodoList() {
  addBtn.addEventListener("click", createToDoListArray);
  addInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") createToDoListArray();
  });
}

function createToDoListArray() {
  const item = addInput.value;

  if (item.trim() === "") alert("ToDoList를 작성해주세요");
  else {
    const toDoListObj = {
      id: Date.now(),
      value: item,
    };
    addInput.value = "";
    toDoListArray.push(toDoListObj);
    printToDoList(toDoListObj);
  }
}

function printToDoList(toDoListObj) {
  const ul = document.querySelector(".list");
  const li = document.createElement("li");
  const modifyBtn = makeModifyBtn();

  li.setAttribute("data-id", toDoListObj.id);
  li.textContent = toDoListObj.value;
  li.appendChild(modifyBtn);
  ul.appendChild(li);
}

function makeModifyBtn() {
  const modifyBtn = document.createElement("button");
  modifyBtn.addEventListener("click", modifyValue);
  return modifyBtn;
}

function modifyValue(event) {
  const li = event.target.parentElement;
  const modifyInput = document.createElement("input");
  const modifyArray = toDoListArray.find((item) => item.id == li.dataset.id);

  li.replaceWith(modifyInput);
  modifyInput.focus();
  modifyInput.value = modifyArray.value;
  modifyInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") modifyToDiList(li, modifyInput, modifyArray);
  });
}

function modifyToDiList(li, modifyInput, modifyArray) {
  const modifyText = modifyInput.value;
  if (modifyText.trim() === "") alert("ToDoList를 작성해주세요");
  else {
    li.textContent = modifyText;
    li.appendChild(makeModifyBtn());
    modifyInput.replaceWith(li);
    modifyArray.value = modifyText;
  }
}

handleTodoList();