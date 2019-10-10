function startTimer(duration, display, des) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      display.textContent = "Time Up!!";
      des.textContent = "";
    }
  }, 1000);
}

window.onload = function() {
  var fiveMinutes = 60 * 18,
    display = document.querySelector("#time");
  des = document.querySelector("#des");
  startTimer(fiveMinutes, display, des);
};
