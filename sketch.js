
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation ("monkey",monkey_running)
  monkey.scale = 0.2
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  
}


function draw() {
  background ("black")
  if(ground.x<0){
  ground.x = ground.width/2
     
  }
  monkey.collide(ground)
  drawSprites()
  
}






