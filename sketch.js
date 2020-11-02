var bullet,wall , thickness;

var speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";

  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "80,80,80";

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black");  
  bullet.velocityX = speed;

  if(collided(bullet,wall)){
    bullet.velocityX = 0;

    var demage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(demage < 10)
    {
      wall.shapeColor = "green";
    }
    if(demage > 10)
    {
      wall.shapeColor = "red";
    }
  }

  drawSprites();
}

function collided(bullet1, wall1){

  bulletRightEdge = bullet1.width + bullet.x;
  wallLeftEdge = wall.x; 

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }else
  {
    return false;
  }
}