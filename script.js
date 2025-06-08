const listWrap = document.querySelector('.list_wrap');
const todoCount = document.querySelector('.num em')

// 완료 토글 함수
function finishToggle(e){
  const btn = e.target;

  if (!btn.classList.contains('btn')) return;
  if (!btn.classList.contains('finish') && !btn.classList.contains('f_cancel')) return;

  // const todoText = btn.parentNode.previousElementSibling.querySelector('p');
  const todoText = btn.closest('.list').querySelector('.or p');

  if(btn.classList.contains('finish')){
    btn.classList.remove('finish');
    btn.classList.add('f_cancel');
    btn.textContent = '완료취소'
    todoText.classList.add('finish_txt');
  }else{
    btn.classList.remove('f_cancel');
    btn.classList.add('finish');
    btn.textContent = '완료'
    todoText.classList.remove('finish_txt');
  }
  updateTodoCount();
}


// 할 일 개수 표시 함수
function updateTodoCount(){
  const todoItems = listWrap.querySelectorAll('.list');
  let unfinishedCount = 0;

  todoItems.forEach(item => {
    const todoText = item.querySelector('.or p');
    if (todoText && !todoText.classList.contains('finish_txt')){
      unfinishedCount++
    }
  });

  todoCount.textContent = unfinishedCount;

}

updateTodoCount();
listWrap.addEventListener('click', finishToggle);