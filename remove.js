function handleClick() {
    //삭제 이벤트핸들러
    const eliminationBtn = document.querySelectorAll('.elimination');
    eliminationBtn.forEach(e => {
        e.addEventListener('click', removeList);
    });

    // 전체삭제 이벤트핸들러
    const allBtn = document.querySelector('.all');
    allBtn.addEventListener('click', removeAll)
}


// 개별 삭제 함수
function removeList(e) {
    const isRemove = confirm('해당 항목을 삭제하시겠습니까?');
    
    if(!isRemove) return;

    const li = e.target.closest('li');
    toDoListArray = toDoListArray.filter((item) => item.id !== parseInt(li.dataset.id));
    //console.log(e); //PointerEvent 객체
    // console.log(e.target); //PointerEvent 객체가 가르키는 요소
    li.remove();


    updateTodoCount();
    setLocalStorage();
}



// 전체 삭제 함수
function removeAll() {
    const isRemove = confirm('전체 항목을 삭제하시겠습니까?');
    if(!isRemove) return;

    const eliminationBtn = document.querySelectorAll('.elimination');

    eliminationBtn.forEach(e => {
        if (e.closest('li').style.display !== 'none') {
            e.closest('li').remove();
            toDoListArray.splice(0);
        }
    });



    updateTodoCount();
    setLocalStorage();
}


handleClick();