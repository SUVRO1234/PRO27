
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var box;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(600,590,1200,10,option);
  World.add(world,ground);
  box = new Box(mouseX, mouseY, 10);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mouseDragged(){
  boxes.push(
    
    new Box(mouseX, mouseY, 10)
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,400,10);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
}

