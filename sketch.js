
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	bg = loadImage("hhh.jpg");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
  world = engine.world;
  
  roof = new Ground(400,150,250,20);
	

	ball1 = new Ball(520,450,20);
	ball2 = new Ball(460,450,20);
	ball3 = new Ball(400,450,20);
	ball4 = new Ball(340,450,20);
  ball5 = new Ball(280,450,20);
  
  rope1 = new Rope(ball1.body,roof.body,50*2,0);
  rope2 = new Rope(ball2.body,roof.body,25*2,0);
  rope3 = new Rope(ball3.body,roof.body,-0*2,0);
  rope4 = new Rope(ball4.body,roof.body,-25*2,0);
  rope5 = new Rope(ball5.body,roof.body,-50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();

  keyPressed();

} 
function keyPressed() { 
	if (keyDown(UP_ARROW)) {
     Matter.Body.applyForce(ball1.body,ball1.body.position,{x:5,y:-5},20);
     } 
} 






