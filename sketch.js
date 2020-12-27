const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
//var bobDiameter=60;
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  //Create the Bodies Here.
   
//  rope1 = new Rope(bob1.body, roof.body, -120, 0);
	//rope2 = new Rope(bob2.body, roof.body, -90, 20);
	//rope3 = new Rope(bob3.body, roof.body, -5, 20);
//	rope4 = new Rope(bob4.body, roof.body, 80, 20);
//	rope5 = new Rope(bob5.body, roof.body, 165, 20);
	roof = new Roof(435, 200, 400, 50);
	bob1 = new Bob(310, 450, 30);
	bob2 = new Bob(370, 450, 30);
	bob3 = new Bob(430, 450, 30);
	bob4 = new Bob(490, 450, 30);
	bob5 = new Bob(550, 450, 30);
    strokeWeight(7)
    stroke ("red")
    fill ("pink") 
    Engine.run(engine)
}
function draw() {
  rectMode(CENTER);
  background("purple");
  Engine.run(engine);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
 //rope1.display()
 //rope2.display()
//rope3.display()
//rope4.display()
//rope5.display()
  roof.display()
    drawSprites();
}
function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -300, y: -300})
	}
}