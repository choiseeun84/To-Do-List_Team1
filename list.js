let toDoListArray = [];

const addBtn = document.querySelector(".add_button");
const addInput = document.querySelector(".add_input");

function handleTodoList() {
  //추가 버튼 눌렀을때
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createToDoListArray();
  });
}

function createToDoListArray() {
  //입력값을 배열에 저장
  const item = addInput.value;

  if (item.trim() === "") alert("ToDoList를 작성해주세요");
  else {
    const toDoListObj = {
      id: Date.now(),
      value: item,
    };
    addInput.value = "";
    toDoListArray.push(toDoListObj);
    printAddList(toDoListObj);
  }
}

function printAddList(toDoListObj) {
  //ToDoList 출력
  const ul = document.querySelector(".list_wrap");
  const li = makelist();
  const finishBtn = makeFinishBtn();
  const pDiv = makePDiv();
  const p = makeP(toDoListObj.value);
  const btnDiv = makeBtnDiv();
  const rewriteBtn = makeRewriteBtn();
  const eliminationBtn = makeEliminationBtn();

  li.setAttribute("data-id", toDoListObj.id);
  li.appendChild(finishBtn);
  li.appendChild(pDiv);
  pDiv.appendChild(p);
  li.appendChild(btnDiv);
  btnDiv.appendChild(rewriteBtn);
  btnDiv.appendChild(eliminationBtn);
  li.appendChild(btnDiv);
  ul.appendChild(li);
  updateTodoCount();
}

function rewriteValue(event) {
  //수정하는 입력창 생성
  const li = event.target.parentElement.parentElement;
  const p = event.target.parentElement.parentElement.children[1].children[0];
  const rewriteBtn = event.target.parentElement.children[0];

  const rewriteArray = toDoListArray.find((item) => item.id == li.dataset.id);
  const form = makeRewiteform();
  const rewriteInput = makeRewiteInput();
  const saveBtn = makeSaveBtn(rewriteInput, rewriteArray, p);

  form.appendChild(rewriteInput);
  p.replaceWith(form);
  rewriteInput.focus();
  rewriteInput.value = rewriteArray.value;
  rewriteBtn.replaceWith(saveBtn);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    rewriteToDoList(e, rewriteInput, rewriteArray, p, saveBtn);
  });
}

function rewriteToDoList(event, rewriteInput, rewriteArray, p, saveBtn) {
  //수정된 ToDoList 출력
  const rewriteBtn = makeRewriteBtn();
  const form = event.target.parentElement.parentElement.children[1].children[0];
  const rewriteText = rewriteInput.value;

  if (rewriteText.trim() === "") alert("ToDoList를 작성해주세요");
  else {
    p.textContent = rewriteText;
    form.replaceWith(p);
    rewriteArray.value = rewriteText;
    saveBtn.replaceWith(rewriteBtn);
  }
}

function makeSaveBtn(rewriteInput, rewriteArray, p) {
  //저장 버튼 생성
  const saveBtn = document.createElement("button");
  saveBtn.className = "btn save";
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    rewriteToDoList(e, rewriteInput, rewriteArray, p, saveBtn);
  });
  return saveBtn;
}

function makeRewiteform() {
  //수정 폼 생성
  const form = document.createElement("form");
  return form;
}

function makeRewiteInput() {
  //수정할 수 있는 입력창 생성
  const rewriteInput = document.createElement("input");
  return rewriteInput;
}

function makelist() {
  //list 생성
  const li = document.createElement("li");
  li.className = "list flex_box";
  return li;
}

function makeFinishBtn() {
  //완료 버튼 생성
  const finishBtn = document.createElement("button");
  finishBtn.className = "btn finish";
  return finishBtn;
}

function makePDiv() {
  //텍스트 감싸는 div 생성
  const pDiv = document.createElement("div");
  pDiv.className = "or";
  return pDiv;
}

function makeP(value) {
  //텍스트 생성
  const p = document.createElement("p");
  // p.className = 'todo'
  p.textContent = value;
  return p;
}

function makeBtnDiv() {
  //버튼 감싸는 div 생성
  const btnDiv = document.createElement("div");
  btnDiv.className = "btn_box";
  return btnDiv;
}

function makeRewriteBtn() {
  //수정 버튼 생성
  const rewriteBtn = document.createElement("button");
  rewriteBtn.className = "btn rewrite";
  rewriteBtn.addEventListener("click", rewriteValue);
  return rewriteBtn;
}

function makeEliminationBtn() {
  //삭제 버튼 생성
  const eliminationBtn = document.createElement("button");
  eliminationBtn.className = "btn elimination";
  eliminationBtn.addEventListener("click", removeList);
  return eliminationBtn;
}

handleTodoList();
