//adding matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//object variables
var b,p;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);
 
//making world
	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies 
	b = new Blueb(200,200,50,50);
    p = new Pinkb(1300,200,50,50);
}


function draw() {
  
  background("white");
  
 b.display();
 p.display();
  drawSprites();
 
}







