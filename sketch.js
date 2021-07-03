var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(55,90);
  weight = random(30,52);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2)
  bullet.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  
  if (hascollided(bullet, wall)){
  
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if (damage>10){
    wall.shapeColor=color(255,0,0)
  }
  if (damage<10){
    wall.shapeColor = color(255,0,0);
  }
  }
  bullet.collide(wall);
  drawSprites();
}
function hascollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bullet>= wall){
    return true
  } 
  return false;
}