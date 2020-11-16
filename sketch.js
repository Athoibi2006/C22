const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine1,world; 
var ground, ball;


function setup(){ 
  createCanvas(400,400);
  engine1= Engine.create(); 
  world=engine1.world; 
  
  var ground_options = {
    isStatic : true
  }

  ground=Bodies.rectangle(200,390,200,20,ground_options); 
  World.add(world, ground); 
  console.log(ground); 
  //console.log(object.position.x,object.position.y); 

  var ball_options = {
    restitution : 1.0
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball);

} 


function draw(){ 
  background("black"); 

  Engine.update(engine1); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

 }

































