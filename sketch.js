var dog, bg, ground
var frisbee, happyDog
var Play=1
var End=0
var gameState=Play


function preload(){
bgImg=loadImage("bg.jpg")
dogImg=loadImage("dog.gif")
frisbeeImg=loadImage("frisbee.png")
happyDogImg=loadImage("happyDog.png")
}


function setup() {
  createCanvas(1400,680);

bg=createSprite(700,350,50,40)
bg.addImage(bgImg)
bg.scale=1
  
dog=createSprite(100,630,50,50)
dog.addImage(dogImg)
dog.scale=.5
dog.setCollider("rectangle",0,0,200,80)
dog.debug=true

ground=createSprite(700,680,1400,10)

frisbee=createSprite(1800,400,50,50)
frisbee.addImage(frisbeeImg)
frisbee.scale=.5
frisbee.setCollider("rectangle",0,0,200,80)
frisbee.debug=true

happyDog=createSprite(700,350,50,50)
happyDog.addImage(happyDogImg)
happyDog.scale=.5


}

function draw() {
if(gameState===Play){
  
if(bg.x<600){
  bg.x=700
}

bg.velocityX=-3


if(keyDown("Up") && dog.y>=400){
  dog.velocityY=-8
  }

dog.velocityY=dog.velocityY + 0.8

if(keyDown("Right")){
  dog.velocityX=3
}

frisbee.velocityX=-3

if(dog.isTouching(frisbee)){
  gameState=End
}

happyDog.visible=false

ground.visible=false


  }

  if(gameState===End){
    dog.velocityX=0
    dog.velocityY=0
    frisbee.velocityX=0

    dog.visible=false
    frisbee.visible=false

    bg.velocityX=0



    happyDog.visible=true

  }
   

dog.collide(ground)
  drawSprites();
}