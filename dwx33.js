function showPic(whichpic){
var source =whichpic.getAttribute("href");
var dwx33 =document.getElementById("dwx33");
dwx33.setAttribute("src",source);
var text=whichpic.getAttribute("title")
var description = document.getElementById("description");
description.firstChild.nodeValue = text;
 }
