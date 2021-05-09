var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var backgroundImg;
function preload(){
  backgroundImg=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  

  
  

  }
 


function draw() {
  background(backgroundImg);
 
 
  Engine.update(engine);
  
  
  
  
  if(frameCount%200===0){
    particles.push(new Particles(random(width/2-100,width/2+100),10,10) )
  }
  
  //display the paricles 
for(var h=0;h<particles.length;h++){
  particles[h].display();
  
}
}