const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
var engine,world;
function preload() {
  backgroundimg = loadImage("snow2.jpg");

}



function setup() {
  createCanvas(1000,500);
  engine=Engine.create();
  world=engine.world;
  snowobj=new Snow(200,100);

}

function draw() {
  background(backgroundimg);  
  Engine.update(engine);
  snowobj.display();
}
 