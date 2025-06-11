const listWrap = document.querySelector('.list_wrap');
const todoCount = document.querySelector('.num em');
const _filterBtn = document.querySelectorAll(".filter_box li > button");

// 완료 토글 함수
function finishToggle(e){
  const btn = e.target;

  if (!btn.classList.contains('btn')) return;
  if (!btn.classList.contains('finish') && !btn.classList.contains('f_cancel')) return;

  // const todoText = btn.parentNode.previousElementSibling.querySelector('p');
  const todoText = btn.closest('.list').querySelector('.or p');
  const li = e.target.closest('li');
  const checkArray = toDoListArray.find((item) => item.id == li.dataset.id);

  if(btn.classList.contains('finish')){
    btn.classList.remove('finish');
    btn.classList.add('f_cancel');
    btn.textContent = '완료취소'
    todoText.classList.add('finish_txt');
    checkArray.check = true;
    setLocalStorage();
    
  }else{
    btn.classList.remove('f_cancel');
    btn.classList.add('finish');
    btn.textContent = '완료'
    todoText.classList.remove('finish_txt');
    checkArray.check = false;
    setLocalStorage();
  }

  const activeBtn = [..._filterBtn].find(button => button.classList.contains('active'));
  if (activeBtn) activeBtn.click();

  updateTodoCount();
}


// 필터 상태 확인 함수
function getActiveFilter() {
  if (_filterBtn[0].classList.contains('active')) {
    return '전체';
  } else if (_filterBtn[1].classList.contains('active')) {
    return '완료';
  } else if (_filterBtn[2].classList.contains('active')) {
    return '미완료';
  } else {
    return '전체';
  }
}


// 할 일 개수 표시 함수
function updateTodoCount(){
  const todoItems = listWrap.querySelectorAll('.list');
  let count = 0;
  const activeFilter = getActiveFilter();

  todoItems.forEach(item => {
    const todoText = item.querySelector('.or p');
    if (activeFilter === '전체'){
      count++;
    }else if (activeFilter === '완료'){
      if(todoText && todoText.classList.contains('finish_txt')) count++
    }else if (activeFilter === '미완료'){
      if(!todoText || !(todoText.classList.contains('finish_txt'))) count++
    }
  });

  todoCount.textContent = count;
}

updateTodoCount();
listWrap.addEventListener('click', finishToggle);