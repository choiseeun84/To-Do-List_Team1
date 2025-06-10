// 필터링 버튼 누르면 active클래스 활성화 되는 기능
function activeBtn() {
  const filterBtn = document.querySelectorAll(".filter_box li > button");
  for (let btn of filterBtn) {
    btn.addEventListener("click", function () {
      for (let btn of filterBtn) {
        if (btn !== this) {
          btn.classList.remove("active");
        } else if (btn === this) {
          btn.classList.add("active");
          const itemList = document.querySelectorAll(".list");

          // 버튼이 눌렸을때 필터링 되는 기능
          for (const item of itemList) {
            if (filterBtn[0] === this) {
              item.style.display = "flex";
            } else if (filterBtn[1] == this) {
              if (!item.querySelector(".finish_txt")) {
                item.style.display = "none";
              } else {
                item.style.display = "flex";
              }
            } else if (filterBtn[2] === this) {
              if (item.querySelector(".finish_txt")) {
                item.style.display = "none";
              } else {
                item.style.display = "flex";
              }
            }
          }
          updateTodoCount();
        }
      }
    });
  }
}

activeBtn();
