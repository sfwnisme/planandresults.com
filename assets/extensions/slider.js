"use strict";
let content =
  [{
    comment: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    img: './assets/images/clients/avatar.webp',
    userName: 'عميل رقم 1',
    position: '1 الكيان - المسمى الوظيفيي'
  },
  {
    comment: "التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،",
    img: './assets/images/clients/avatar.webp',
    userName: 'عميل رقم 2',
    position: '2 الكيان - المسمى الوظيفيي'
  },
  {
    comment: "إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف",
    img: './assets/images/clients/avatar.webp',
    userName: 'عميل رقم 3',
    position: ' 3 الكيان - المسمى الوظيفيي'
  },
  {
    comment: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    img: './assets/images/clients/avatar.webp',
    userName: 'عميل رقم 4',
    position: '4 الكيان - المسمى الوظيفيي'
  }]

let slideContainer = document.querySelector("[data-info=slide-container]");
let commentBox = document.querySelector("[data-info=comment]")
let clientCont = document.querySelector('[data-info=client-cont]')
let clientImg = document.querySelector('[data-info=client-img]')
let clientInfo = document.querySelector('[data-info=client-info]')
let clientName = document.querySelector('[data-info=client-name]')
let clientPosition = document.querySelector('[data-info=client-position]')
let next = document.querySelector('.swipers .next')
let prev = document.querySelector('.swipers .prev')

let count = 1;
console.log(next)
console.log(prev)

// EVENTS 
next.addEventListener("click", nextComment)
prev.addEventListener("click", prevComment)


/* FUNCTIONS */
// PARENT FUNCTION 
function slider() {
  console.log(clientInfo)
  swip()
}
// SWIP CONTENT FUNCTION
function swip() {
  // comment
  commentBox.textContent = content[count - 1].comment;
  // img
  clientImg.src = content[count - 1].img;
  // name
  clientName.textContent = content[count - 1].userName;
  // position
  clientPosition.textContent = content[count - 1].position
}

addEventListener('DOMContentLoaded', () => {
  swip()
})

// next
function nextComment() {
  if (count >= content.length) {
    count = 1;
  } else {
    count++
  }
  swip()
}

function prevComment() {
  if (count <= 1) {
    count = content.length;
  } else {
    count--
  }
  swip()
}

export default slider