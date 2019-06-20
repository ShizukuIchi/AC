
const backToTopBtn = document.getElementById("backToTopBtn")

window.onscroll = function () {
  backToTopBtn.classList.add("show")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    backToTopBtn.classList.add("show")
  } else {
    backToTopBtn.classList.remove("show")
  }
}

backToTopBtn.addEventListener('click', event => {
  document.body.scrollTop = 0             // For Safari
  document.documentElement.scrollTop = 0  // For Chrome, Firefox, IE and Opera
})

// 判斷使用者是否按下鍵盤按鈕、放開鍵盤按鈕、與複製加入監聽動作
// 計算簡介欄位已輸入的字數

const description = document.getElementById('description')
if (description) {
  description.addEventListener("keypress", detectKeyEvent)
  description.addEventListener("keydown", detectKeyEvent)
  description.addEventListener("keyup", detectKeyEvent)
}

function detectKeyEvent(event) {
  let textField = document.querySelector('#description')
  let memo = document.querySelector('.count-description')
  memo.innerHTML = `簡介欄位剩餘可輸入的字數為 ${200 - (textField.value.length)}`
}