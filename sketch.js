var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	line1=createSprite(400,height-50,200,20);
	line1.shapeColor=color("red");
	line2=createSprite(510,610,20,100);
	line2.shapeColor=color("red");
	line3=createSprite(310,610,20,100);
	line3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");
	
	ball=createSprite(800,650,10,10);
	ball.scale=3.0;
	ellipse(56,44,55,55);
	ball = Bodies.circle(400 , 200 , 5 , {restitution:0.7, isStatic:true});
	
	
	
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})} }
