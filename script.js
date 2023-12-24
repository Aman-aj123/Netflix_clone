// Showing Answers by adding active class
window.addEventListener('load', () => showAns())
function showAns() {
     const quesItem = Array.from(document.querySelectorAll('.question-items'));
     quesItem.forEach((itm) => {
          itm.onclick = function (e) {
               const answerItm = itm.querySelectorAll('.answer')
               console.log(answerItm)
               answerItm.forEach((el) => {
                    el.classList.toggle('active')
               })
          }
     })
}

// Changing themes
const themeIcon = document.querySelector('#themeIcn');

themeIcon.onclick = function () {
     if (themeIcon.classList.contains('fa-sun')) {
          themeIcon.classList.remove('fa-sun')
          themeIcon.classList.add('fa-moon')
          document.body.classList.add('white-mode')
     } else {
          themeIcon.classList.remove('fa-moon')
          themeIcon.classList.add('fa-sun')
          document.body.classList.remove('white-mode')
     }

}