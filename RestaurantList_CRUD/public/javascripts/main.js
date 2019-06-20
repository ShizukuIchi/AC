
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