const TODO_KEY = "todo";

//배열의 값을 string으로 바꿔서 로컬스토리지에 저장
function setLocalStorage() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoListArray));
}

function getLocalStorage() {
  const storageValue = localStorage.getItem(TODO_KEY);
  if (storageValue) {
    const storageArray = JSON.parse(storageValue); //불러온 값(문자열)을 배열로 바꿔줌.
    toDoListArray = storageArray;
    storageArray.forEach(printAddList);
  }
}
