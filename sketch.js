const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;
var s1,s2,s3,s4,s5
function preload(){
  backgroundImage=loadImage("snow3.jpg");
}
function setup() {
  var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  s1=new Snow(200,300)
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  s1.display();
  }