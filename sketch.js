
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object, object1,circle1 ;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  myworld = engine.world;

  object= Bodies.rectangle(200,100,50,50)
  object1= Bodies.rectangle(200,150,90,90)
  circle1= Bodies.circle(250,180,50)

  World.add(myworld,[object,object1,circle1])
}
function draw()
{
  background("skyblue");
 
  Engine.update(engine)
  
  rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(object1.position.x,object1.position.y,90,90)
 
    circle(circle1.position.x,circle1.position.y,50)
}
