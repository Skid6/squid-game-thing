var bg, bgimg
var SeongGiHun, SeongGiHunimg
var LightGreen, LightGreenimg
var LightRed, LightRedimg
var Laser, Laserimg


function preload(){
 bgimg = loadImage("Backround.jpg")
 SeongGiHunimg = loadImage("unnamed.png")
 LightRed = loadImage("Red.png")
 LightGreen = loadImage("Green.png")
 Laserimg = loadImage("Laser.png")
}

function setup(){
  createCanvas(750,967)
  SeongGiHun = createSprite(375,900,10,10)
  SeongGiHun.addImage("SeongGiHun",SeongGiHunimg)
  SeongGiHun.scale = 0.03
  
  

 
}

function draw(){
  background(bgimg);
 text(mouseX+","+mouseY,mouseX,mouseY)
 if(keyDown(UP_ARROW)){
  SeongGiHun.y-=4
}
if(keyDown(LEFT_ARROW)){
  SeongGiHun.x-=4
}
if(keyDown(RIGHT_ARROW)){
  SeongGiHun.x+=4
}
if(keyDown(DOWN_ARROW)){
  SeongGiHun.y+=4
}
  Laser()
drawSprites()
}
function Laser(){
  if(frameCount%10 === 0){
    var Laser = createSprite(0,random(240,830),5,5)
    Laser.addImage("Laser",Laserimg)
    Laser.velocityX = 10
    Laser.scale = 0.2
  }
  
}
