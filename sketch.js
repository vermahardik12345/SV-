var form1;
var bg;
var gamestate="wait";
function preload(){
bg=loadImage("imgs/back.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    if(gamestate==="wait"){
   image(bg,0,0,windowWidth,windowHeight);
    
    var title=createElement('h2');
    var input=createInput("name");
    var button=createButton("story")

    title.html("game");
   button.position(200,400);
   input.position(200,300);
title.position(200,100);
   button.mousePressed(function(){
       input.hide();
       button.hide
       var greeting=createElement('h3');
       greeting.html("welcome");
       greeting.position(200,400);
       //gamestate==="story";
       console.log("hi");
   })
}
}
function draw(){
   
    //form1.display();
    if(gamestate==="story"){
        console.log("hi");
    }
}