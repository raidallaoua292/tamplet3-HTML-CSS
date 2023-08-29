
let skill = document.querySelector(".skills");
let barSpans = document.querySelectorAll(".bar span");
let btn = document.querySelector(".btn_up");
window.onscroll = function ()
{
  /* skills */
  if (window.scrollY >= skill.offsetTop + 100) {
    barSpans.forEach((span) => {
      span.style.width = span.dataset.file;
    });
  }
  /* top */
  if (window.scrollY >= 1400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
// top
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


/***********************************/
/*Countdown*/

// The End of The Year Date To Countdown To

let counhDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(counhDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  //Find The Date Diffrence Between Now And Countdown Date
  let dateDiff = counhDownDate - dateNow;

  //Get Taim Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

/*Countdown*/

