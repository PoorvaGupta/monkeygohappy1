
var monkey , monkey_running;
var ground, ground1;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);

  monkey = createSprite(50,330,10,10);
  monkey.addImage( monkey_running);
  monkey.scale = 0.13;  
  
   ground = createSprite(300,385,600,30);
  
   ground1 = createSprite(300,385,600,30);

   obstacleGroup = createGroup();
   FoodGroup = createGroup();
  
   survivalTime = 0;
  
}


function draw() {
  background("white");
  
   monkey.collide(ground);
  
   if(keyDown("space") && monkey.y >= 330){
    monkey.velocityY = -20; 
  }
  
    monkey.velocityY = monkey.velocityY +1.1;
  
  ground.velocityX = -5;
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   stroke("black");
     textSize(20);
     fill("black");
     survivalTime = Math.ceil(frameCount/frameRate());
     text("Survival Time:"+survivalTime,100,50);
     
    
  
  
  if(frameCount % 300 === 0){
   var obstacle = createSprite(600,350,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.18;
    obstacle.velocityX = -6;
     
    obstacle.lifetime = 110;
    obstacleGroup.add(obstacle);
  }
  
  if(frameCount % 80 === 0){
    var banana = createSprite(600,180,10,10);
     banana.addImage(bananaImage);
     banana.y = Math.round(random(180,230));
     banana.scale = 0.13;
     banana.velocityX = -6;
        
  
     banana.lifetime = 100;
     FoodGroup.add(banana);
  }
  
  
  
  drawSprites();
}






