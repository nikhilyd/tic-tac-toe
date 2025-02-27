let button = document.querySelectorAll(".cell");
let reset = document.querySelector("#reset");
let win = document.querySelector("#img1");
let drow = document.querySelector("#img2");
// win.style.visibility = "hidden";
// drow.style.visibility = "hidden";

let currento = true;



button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML === "") {
      if (currento) {
        btn.innerHTML = "⭕";
        currento = false;
      } else {
        btn.innerHTML = "✖️";
        currento = true;
      }
      btn.disabled = true;

      const result = checkWinner();
      if (result) {
        if (result === "Draw") {
          drow.style.visibility = "visible";
          pop.style.visibility = "visible";
          head.innerHTML = "its a draw!" ;
          resett();
        } else {
          win.style.visibility = "visible";
          pop.style.visibility = "visible";
          head.innerHTML = "winner : " + result;
          resett();
        }
      }
    }
  });
});

function checkWinner() {
  let btn1 = button[0].innerHTML;
  let btn2 = button[1].innerHTML;
  let btn3 = button[2].innerHTML;
  let btn4 = button[3].innerHTML;
  let btn5 = button[4].innerHTML;
  let btn6 = button[5].innerHTML;
  let btn7 = button[6].innerHTML;
  let btn8 = button[7].innerHTML;
  let btn9 = button[8].innerHTML;

  if (btn1 === btn2 && btn2 === btn3 && btn1 !== "") return btn1;
  else if (btn4 === btn5 && btn5 === btn6 && btn4 !== "") return btn4;
  else if (btn7 === btn8 && btn8 === btn9 && btn7 !== "") return btn7;
  else if (btn1 === btn4 && btn4 === btn7 && btn1 !== "") return btn1;
  else if (btn2 === btn5 && btn5 === btn8 && btn2 !== "") return btn2;
  else if (btn3 === btn6 && btn6 === btn9 && btn3 !== "") return btn3;
  else if (btn1 === btn5 && btn5 === btn9 && btn1 !== "") return btn1;
  else if (btn3 === btn5 && btn5 === btn7 && btn3 !== "") return btn3;
  else if (![...button].some((btn) => btn.innerHTML === "")) return "Draw";

  return null;
}

reset.addEventListener("click", () => {
  button.forEach((btn) => {
    btn.innerHTML = "";
    btn.disabled = false;
  });
  currento = true;
});

function resett() {
  button.forEach((btn) => {
    btn.innerHTML = "";
    btn.disabled = false;
  });
}

const close = document.querySelector("#close");

const pop = document.querySelector("#pop");
let head = document.querySelector("#heading");

pop.style.visibility = "hidden";
close.addEventListener("click", () => {
  pop.style.visibility = "hidden";
  win.style.visibility = "hidden";
  drow.style.visibility = "hidden";
});
