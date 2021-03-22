"use strict";
/*
Name: Lyubomyr Savchuk
File: script.js
*/
//1
window.addEventListener("load", keyListener);



function keyListener(){
  window.onmousemove = function (e) {
    if (!e) e = window.event;
    if (e.shiftKey) {alert("My Meaningful implementation of key event");}
  }
  clock();
}

//7 
function clock(){

    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var day = currentDate.getDate();


    document.querySelector("#time").innerHTML = year +"/"+ month +"/"+ day + "<br>" +
    + hours + ":"+ minutes +":"+ seconds;
    document.querySelector("#time").setAttribute("style", "color: black; font-size: 25px;" +
      "margin-left: 20px;  font-style: italic; font-weight: 100%; ");

      test();
}

function test()
{

  var navigation = document.getElementById("navigation");
  
  var homeBtn = document.createElement("button");
  homeBtn.innerText = "HOME";
  var div = document.createElement('div');
  navigation.appendChild(homeBtn);

  homeBtn.addEventListener("click", home);

  homeBtn.addEventListener("mouseover", function(){
    homeBtn.setAttribute("style", "background-color: green; color: red;");
  });
  homeBtn.addEventListener("mouseout", function(){
    homeBtn.setAttribute("style", "background-color: white; color: red;");
  });

  /////////////////////////////////////////
  var picBtn = document.createElement("button");
  picBtn.innerText = "Pictures"; 
  navigation.appendChild(picBtn);
  picBtn.addEventListener("click", Pictures);

  picBtn.addEventListener("mouseover", function(){
    picBtn.setAttribute("style", "background-color: green; color: red;");
  });
  picBtn.addEventListener("mouseout", function(){
    picBtn.setAttribute("style", "background-color: white; color: red;");
  });
  /////////////////////////
  var vidBtn = document.createElement("button");
  vidBtn.innerText = "Videos";
  navigation.appendChild(vidBtn);
  vidBtn.addEventListener("click", Videos);

  vidBtn.addEventListener("mouseover", function(){
    vidBtn.setAttribute("style", "background-color: green; color: red;");
  });
  vidBtn.addEventListener("mouseout", function(){
    vidBtn.setAttribute("style", "background-color: white; color: red;");
  });
  /////////////////
  var moreBtn = document.createElement("button");
  moreBtn.innerText = "More";
  navigation.appendChild(moreBtn);
  moreBtn.addEventListener("click", More);

  moreBtn.addEventListener("mouseover", function(){
    moreBtn.setAttribute("style", "background-color: green; color: red;");
  });
  moreBtn.addEventListener("mouseout", function(){
    moreBtn.setAttribute("style", "background-color: white; color: red;");
  });
 //////////////////////////////
  var buttons = [homeBtn, picBtn, vidBtn, moreBtn];
  for(var i=0; i<=buttons.length; i++){
    buttons[i].setAttribute("style", "color: red;");

  } 

}
function home(){
  window.location.href = "Index.html";
}
function Pictures(){
  window.location.href = "Pictures.html";
}
function Videos(){
  window.location.href = "Videos.html";
}
function More(){
  window.location.href = "More.html";
}




