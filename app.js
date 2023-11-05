'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const container = document.querySelector(".container");
const text = document.getElementById("text");


let totalTime = 21000;
let breathTime = 8000;
let holdTime = 0;




function zazenAnimation() {
  text.innerHTML = "息を吸います";
  container.className = "container grow";
  setTimeout(() => {
    text.innerHTML = "息を吐きます";
    container.className = "container shrink";
    // setTimeout(() => {
    //   text.innerHTML = "吐きましょう";
    //   container.className = "container shrink";
    // }, holdTime);
  }, breathTime);
}



zazenAnimation();
setInterval(zazenAnimation, totalTime);