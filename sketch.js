var bullet,wall ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);



  speed=random(55,90);
  weight=random(400,1500);

  bullet =  createSprite(50,200,50,50);
 bullet.velocityX = speed ; 

 wall = createSprite(800,200,60,height/2);
 wall.shapeColor = color (80,80,80);
}


function draw() {
  background("black");  
  
  hascolided(wall,bullet);

  drawSprites();
}
