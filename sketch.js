
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,ground1,box2,box3,ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

box1=new Box(1400,580,20,100);
box2=new Box(1460,580,200,20);
box3=new Box(1520,580,20,100);
ball1=new Ball(100,580,30,30);
ground1=new Ground(800,600,1600,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 box1.display();
 ground1.display();
 box2.display();
 box3.display();
 ball1.display();
 ifpressed();
}
function ifpressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball1.body,ball1.body.position,{x:5,y:-10});
	}
}


