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
    //console.log(e); //PointerEvent 객체
    //console.log(e.target); //PointerEvent 객체가 가르키는 요소
    e.target.closest('li').remove();
    updateTodoCount();
}

// 전체 삭제 함수
function removeAll() {
    const eliminationBtn = document.querySelectorAll('.elimination');

    eliminationBtn.forEach(e => {
        e.closest('li').remove();
    });

    updateTodoCount();
}


handleClick();