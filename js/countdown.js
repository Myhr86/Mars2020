window.onload = function() {
  var countdownTimer = document.querySelector(".timerP");
  var countdownDate = new Date("Jul 17, 2020 22:00:00").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var goal = countdownDate - now;

    var days = Math.floor(goal / (1000 * 60 * 60 * 24));
    var hours = Math.floor((goal % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var minutes = Math.floor((goal % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((goal % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (goal < 0) {
      clearInterval(x);
      countdownTimer.innerHTML = "Expired";
    }
  }, 1000);

}
