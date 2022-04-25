const span = document.querySelector('div+div span');
const btns = document.querySelectorAll('button');
const startNumber = 0;
let number = startNumber;
const checkButton = (e) => {
  e.target.textContent == 'decrease'
    ? number--
    : e.target.textContent == 'reset'
    ? (number = startNumber)
    : e.target.textContent == 'increase'
    ? number++
    : e.target.textContent;

  number < 0
    ? (span.style.color = "red")
    : number > 0
    ? (span.style.color = "lightgreen")
    : number==0?span.style.color = "#fff":console.log("xd");
    span.textContent = number;
};

btns.forEach((button) => {
  button.addEventListener('click', checkButton);
});
