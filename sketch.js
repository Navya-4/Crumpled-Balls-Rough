
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball = new Ball (500,320,20);
	ground = new Ground (640,350,1280,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();
  
  drawSprites();
 
}



