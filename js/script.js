var burger = document.querySelector(".burger");
var container = document.getElementById("container");
var headLine = document.getElementById("welcomeText");
var subText = document.querySelector(".subText");
var main = document.querySelector(".main");
var newMain = document.getElementById("newMain");
var footer = document.getElementsByTagName("footer");
var openBurger = document.querySelector("openBurger");
var containDiv = document.createElement("div");
var html = document.getElementById("contactHTML");

var p = document.createElement("p");
var x = "X";
var div = document.createElement("div");
var link1 = document.createElement("div");
burger.addEventListener("click", burgerFunction);

function closeMenu() {
  location.reload();
};

function burgerFunction() {
  if (html !== null) {
    html.style.backgroundImage = "none";
  }
  newMain.style.display = "inline-block";
  burger.style.display = "none";
  main.style.display = "none";
  container.style.backgroundColor = "#000";
  //headLine.style.display = "none";
  //subText.style.display = "none";
  footer[0].style.display = "none";
  container.style.opacity = 1;
  p.classList.add("close");
  p.classList.remove("closeHidden");
  p.addEventListener("click", closeMenu);
  p.append(x);
  containDiv.append(p);
  containDiv.classList.remove("containDivNone");
  containDiv.classList.add("containDiv");

  for(var i = 0; i < 4; i++) {
    var aFirst = document.createElement("a");
    var aSecond = document.createElement("a");
    var aThird = document.createElement("a");
    var aFourth = document.createElement("a");
    var h3First = document.createElement("h3");
    var h3Second = document.createElement("h3");
    var h3Third = document.createElement("h3");
    var h3Fourth = document.createElement("h3");
    var hr = document.createElement("hr");

    var textArray = ["MISSION OVERVIEW","MISSION TIMELINE","MARS WEATHER","CONTACT US"];
    for(var j = 0; j < textArray.length; j++) {

    div.classList.add("burgerDiv");
    link1.classList.add("burgerLinks");
    hr.classList.add("linkHr");
    h3First.classList.add("linkH3");
  }

    var linkArray = ["overview.html","timeline.html","weather.html","contact.html"];
    for(var j = 0; j < textArray.length; j++) {
      aFirst.href = linkArray[i];
  }

    aFirst.append(textArray[i]);
    h3First.append(aFirst);
    link1.append(h3First);
    link1.append(hr);
    div.append(link1);
    containDiv.append(div);
    newMain.append(containDiv);
    };
};
//};
