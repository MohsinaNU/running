var girl
var girlimg
var path
var pathimg


function preload(){
    
girlimg=loadImage("opponent4.png");
pathimg = loadImage("Road.png");


}

function setup() {

 createCanvas(1200,600);

 girl= createSprite(120,320)
 girl.addImage(girlimg);
 girl.scale =0.2
 girl.velocityx= 0.5

 //creating path
 path = createSprite(100,260)
 path.addImage(pathimg)
 path.scale =0.5
 path.velocityX =-5


 
}

function draw() {
    background("black");

    drawSprites();
    if(path.x<0){
       path.x = width/2
    }
 
}