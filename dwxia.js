function prepareGallery(){
if(!document.getElementByTagName) return false;
if(!document.getElementById) return false;
if(!document.getElementById("imagegallery")) return false;
var gallery = document.getlementById("imagegallery");
var links = gallery.getElementByTagName("a");
for(var i=0;i<links.length;i++){
links[i].onclick = function(){
return showPic(this) ? false:true;}}}
function showPic{
if(!document.getElementById("dwx33")) return false;
var source = whichpic.getElementById("href");
var placeholder = document.getElementById ("dwx33");
if (placeholder.nodeName !="IMG") return false;
placeholder.setAttribute("src",source);
if(!document.getElementById("description")){
var text = whichpic.getAttribute("title")? whichpic.getAttribute ("title")? 
var description = document.getElementById("description");
if(description.firstChild.nodeType == 3){
description.firstChild.nodeType = text;}}
return true;}


