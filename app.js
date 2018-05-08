var refresh = function() {
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var button = document.getElementById("refresh");
context.clearRect(0,0,300,300);
for(i=0; i<600; i++) {

var x = Math.floor(Math.random()*300);
var y = Math.floor(Math.random()*300);
var radius = Math.floor(Math.random()*20);

var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

context.beginPath();
context.arc(x,y,radius,Math.PI*2,0,false);
context.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
context.fill();
context.closePath();
}
	button.addEventListener("click", refresh, false);
}
refresh();
