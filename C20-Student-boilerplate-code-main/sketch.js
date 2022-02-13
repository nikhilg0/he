// create class for walls
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lava
let engine;
let world;
var ball;
var collision 
var ground;
var ground1
var ground2
var ground3
var button
var wall
var ceiling
var angle = 180
var fall




var gameState

function setup() {
  createCanvas(windowWidth,windowHeight-5);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
 
   
   var ground1_options ={
    isStatic: false

  };
  var button_options ={
    isStatic: false,
   restitution: 3,
   density:111,
   frictionAir:0.1
  };
  var fall_options ={

    isStatic : true
  };
  
  
  
  ground = new Ground(300,390,900,20);
  ground2 = new Ground(0,500,10,1000);
  ground3 = new Ground(800,430,100,20);
  ground4 = new Ground(1300,390,900,20)
  ground1 = Bodies.rectangle(500,340,20,100,ground1_options);
  World.add(world,ground1);
  button = Bodies.rectangle(20,340,20,100,button_options);
  World.add(world,button);
  wall = new Ground(700,-200,20,1000)
  World.add(world,wall); 
   ceiling = new Ground(500,-300,2100,20);
 
  var lava_options = {
   isStatic: false,

  }
  lava = Bodies.rectangle(0,500,10,1000,lava_options);
  World.add(world,lava);
  
  ball = Bodies.circle(100,10,20,ball_options);

  World.add(world,ball);

 fall = Bodies.rectangle(800,340,100,40,fall_options);
 World.add(world,fall)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(1);
  Engine.update(engine);
  push()
  fill("blue")
  ellipse(ball.position.x,ball.position.y,20);
pop()
  fill("green")
  rect(300,390,900,20);
  rect(ground1.position.x,ground1.position.y,20,100);
  rect(button.position.x,button.position.y,20,100);
  rect(700,-200,20,1000);
  rect(500,-300,2100,20);
  rect(fall.position.x,fall.position.y,100,40)
  rect(1300,390,900,20);
  rect(800,430,100,20)
  rect(700,30,10,10)
  push()
  fill("orange")
  rect(0,500,10,1000);
 pop()
gameState = 0





if (keyCode === 32){
  console.log("space pressed")
  lava.velocityX= 5

}
collision = Matter.SAT.collides(ball,fall)
if (collision.collided){
 // Matter.Body.setStatic(false)
  console.log("collided")
}
Matter.Body.setVelocity(lava,{x:1,y:0})
}

function keyPressed() {
  var newAngle = 10;
  var velocity;

  if (keyIsDown(RIGHT_ARROW)) {
    //newAngle = newAngle*(3.14/180);
    //var velocity = p5.Vector.fromAngle(newAngle);

   
   // console.log("newAngle: " + newAngle + " velocity: " + velocity);
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:0})
  }

  if (keyIsDown(LEFT_ARROW)) {
    //newAngle = newAngle*(3.14/180);
    //var velocity = p5.Vector.fromAngle(newAngle);

   
    console.log("newAngle: " );
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.001,y:0})
  }else {
    console.log("error")
  }

}

if (ballX = 10000) {
  console.log("win")
  gamestate = 1
  }

  