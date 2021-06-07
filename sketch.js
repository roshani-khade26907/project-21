
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;
var ball;
var ground;
var Tleft;
var Tright;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 600);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isStatic:false,
		restitution:0.003,
		friction:0.08,
		density:11.1
	}

	ball = Bodies.circle(200,0,20,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,500,width,30);
	Tleft = new Ground(900,405,20,220);
	Tright = new Ground(1190,405,20,220);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
	ellipseMode(RADIUS);
	background("indianRed");

	ellipse(ball.position.x,ball.position.y,20);
	ground.display();
	Tleft.display();
	Tright.display();

	keyPressed();

	drawSprites();

	Engine.update(engine);
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-6})
	}
}

